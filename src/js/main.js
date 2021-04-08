//активация анимаций при скролле
const wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       4,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         false,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);

wow.init();

//счетчики

const counterFromBlock = new Waypoint({
  element: document.querySelector('.count-num'),
  handler: function() {
    new Counter({
      element: '.count-num',
      delay: 10,
      duration: 2500
    })
    this.destroy();
  },
  offset: 'bottom-in-view',
});

const counterStatOil = new Waypoint({
  element: document.querySelector('.stats-oil'),
  handler: function() {
    new Counter({
      element: '.stats-oil',
      delay: 10,
      duration: 2500
    })
    this.destroy();
  },
  offset: 'bottom-in-view',
});

const counterStatTrans = new Waypoint({
  element: document.querySelector('.stats-trans'),
  handler: function() {
    new Counter({
      element: '.stats-trans',
      delay: 10,
      duration: 2500
    })
    this.destroy();
  },
  offset: 'bottom-in-view',
});

const counterStatAlign = new Waypoint({
  element: document.querySelector('.stats-align'),
  handler: function() {
    new Counter({
      element: '.stats-align',
      delay: 10,
      duration: 2500
    })
    this.destroy();
  },
  offset: 'bottom-in-view',
});

const counterStatEngine = new Waypoint({
  element: document.querySelector('.stats-engine'),
  handler: function() {
    new Counter({
      element: '.stats-engine',
      delay: 10,
      duration: 2500
    })
    this.destroy();
  },
  offset: 'bottom-in-view',
});

//модальное окно
const myModal = new Modal({
  linkAttributeName: 'data-modal', 
});

//модальное окно поиска
const searchModal = new Modal({
  linkAttributeName: 'data-modal-search'
});

//слайдер в блоке с табами
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
});

//видео в видео блоке
const videoIframe = new VideoBlock({
  videoBlock: '.video__block',
  videoLink: '.video__link',
  titleVideoBlock: '.video__header',
  playButton: '.video__button'
})

//видео в табах
const tabVideo = new VideoTab({
  videoTabAttribute: '.tab__video',
  videoLinkAttribute: '.video__link',
  tabMediaAttribute: '.video__img',
  playButtonAttribute: '.play-button'
});

//активация мобильного меню при =< 760px
window.onresize = moveElement;
window.onload = moveElement;