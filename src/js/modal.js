class Modal{
  /**
   * При создании экземпляра класса, мы передаём в него
   * js-объект с настройками. Он становится доступен
   * в конструкторе класса в виде переменной props
   */
  constructor(props){
    /**
     * Для удобства некоторые свойства можно не передавать
     * Мы должны заполнить их начальными значениями
     * Это можно сделать применив метод Object.assign
     */
    let defaultConfig = {
        linkAttributeName: 'data-modal',
        // ... здесь остальные свойства
    }
    this.config = Object.assign(defaultConfig, props);

    // сразу вызываем метод инициализации
    this.init();
  }

  /** 
   * В свойство _shadow будет заложен div с визуальной
   * подложкой. Оно сделано статическим, т.к. при создании
   * нескольких экземпляров класса, эта подложка нужна только
   * одна
   */
  static _shadow = false;

  init(){
    /**
     * Создаём триггеры состояния, полезные переменные и.т.д.
     */
    this.isOpened = false; // открыто ли окно
    this.openedWindow = false; //ссылка на открытый .modal
    this._modalBlock = false; //ссылка на открытый .modal__window
    this.starter = false, //ссылка на элемент "открыватель" текущего окна
    // (он нужен для возвращения фокуса на него)
    this._nextWindows = false; //ссылка на .modal который нужно открыть
    this._scrollPosition = 0; //текущая прокрутка (см. выше)

    /**
     * ... остальное
     */
    
    document.addEventListener("click", function (e) {
      const wrap = e.target.classList.contains('modal__shadow--show');
      if(!wrap) return;
      e.preventDefault();
      this.close();
    }.bind(this));


    // Создаём только одну подложку и вставляем её в конец body
    if(!Modal._shadow){
        Modal._shadow = document.createElement('div');
        Modal._shadow.classList.add('modal__shadow');
        document.body.appendChild(Modal._shadow);
    }

    //Запускаем метод для обработки событий см. ниже.
    this.eventsFeeler();
  }

  eventsFeeler(){
    /** 
     * Нужно обработать открытие окон по клику на элементы с data-атрибутом
     * который мы установили в конфигурации - this.config.linkAttributeName
     * 
     * Здесь мы используем делегирование события клика, чтобы обойтись одним
     * лишь обработчиком события на элементе html
     * 
     */
    document.addEventListener("click", function (e) {
      /**
       * Определяем попал ли клик на элемент,
       * который открывает окно
       */ 
      const clickedlink = e.target.closest("[" + this.config.linkAttributeName + "]");

      /** Если действительно клик был на 
       * элементе открытия окна, находим 
       * подходящее окно, заполняем свойства
       *  _nextWindows и _starter и вызываем
       *  метод open (см. ниже)
       */
      if (clickedlink) { 
          e.preventDefault();
          this.starter = clickedlink;
          let targetSelector = this.starter.getAttribute(this.config.linkAttributeName);
          this._nextWindows = document.querySelector(targetSelector);
          this.open();
          return;
      }

      /** Если событие вызвано на элементе
       *  с data-атрибутом data-close,
       *  значит вызовем метод закрытия окна
       */
      if (e.target.closest('[data-close]')) {
          this.close();
          return;
      }
    }.bind(this));
    
    /** По стандарту, в обработчике события в this
     * помещается селектор на котором события обрабатываются.
     * Поэтому нам нужно вручную установить this на наш 
     * экземпляр класса, который мы пишем с помощью .bind().
     */ 

    //обработаем клавишу escape и tab
    window.addEventListener("keydown", function (e) {   
      //закрытие окна по escape
      if (e.which == 27 && this.isOpened) {
          e.preventDefault();
          this.close();
          return;
      }

      /** Вызовем метод для управления фокусом по Tab
       * и всю ответственность переложим на него
       * (создадим его позже)
       */ 
      if (e.which == 9 && this.isOpened) {
          this.focusCatcher(e);
          return;
      }
    }.bind(this));
  }

  focusContol(){
    /** Метод переносит фокус с элемента открывающего окно
     * в само окно, и обратно, когда окно закрывается
     * см. далее в тексте.
     */
    const nodes = this.openedWindow.querySelectorAll(this._focusElements);
    if (this.isOpened && this.starter) {
        this.starter.focus();
    } else {
        if (nodes.length) nodes[0].focus();
    }
  }

  open(selector){
    this.openedWindow = this._nextWindows;
    this._modalBlock = this.openedWindow.querySelector('.modal');

    /** Вызываем метод управления скроллом
     * он будет блокировать/разблокировать
     * страницу в зависимости от свойства this.isOpened
     */
    this._bodyScrollControl();
    Modal._shadow.classList.add("modal__shadow--show");
    this.openedWindow.classList.add("modal--active");
    this.openedWindow.setAttribute('aria-hidden', 'false');

    this.focusContol(); //вызываем метод перевода фокуса (см. ниже)
    this.isOpened = true;
  }

  close(){
    /**
     * Метод закрытия текущего окна. Код упрощён
     * подробнее в статье далее.
     */
    if (!this.isOpened) {
        return;
    }
    this.openedWindow.classList.remove("modal--active");
    Modal._shadow.classList.remove("modal__shadow--show");
    this.openedWindow.setAttribute('aria-hidden', 'true');

    //возвращаем фокус на элемент которым открылось окно
    //this.focusContol();

    //возвращаем скролл
    this._bodyScrollControl();
    this.isOpened = false;
  }

  _bodyScrollControl(){

    let html = document.documentElement;
    if (this.isOpened === true) {
        //разблокировка страницы
        html.classList.remove("modal__opened");
        html.style.marginRight = "";
        window.scrollTo(0, this._scrollPosition);
        html.style.top = "";
        return;
    }

    //блокировка страницы
    this._scrollPosition = window.pageYOffset;
    html.style.top = -this._scrollPosition + "px";
    html.classList.add("modal__opened");
  }
}