class Counter {
  constructor(props) {
    
    let defaultConfig = {
      element: '.data-count',
      action: 'start',
      duration: 1000,
      delay: 16,
      lang: undefined
    }

    this.config = Object.assign(defaultConfig, props);
    this.initCounter();
  }

  initCounter = function() {
    let el = document.querySelector(this.config.element);
    let delayTime = this.config.delay;
    if (this.config.action === 'stop') {
      this.stopCounter(el);
      return;
    }

   this.stopCounter(el);
   
   if (! /[0-9]/.test(el.innerHTML)) {
     return;
   }

    const nums = this.divideNumbers(el.innerHTML, {
      duration: this.config.duration || el.getAttribute('data-duration'),
      lang: this.config.lang || document.querySelector('html').getAttribute('lang') || undefined,
      delay: this.config.delay || el.getAttribute('data-delay')
    });
    el._countUpOrigInnerHTML = el.innerHTML;
    el.innerHTML = nums[0];
    el.style.visibility = 'visible';

    const output = function() {
      el.innerHTML = nums.shift()
      if (nums.length) {
        clearTimeout(el.countUpTimeout)
        el.countUpTimeout = setTimeout(output, delayTime)
      } else {
        el._countUpOrigInnerHTML = undefined
      }
    }
    el.countUpTimeout = setTimeout(output, this.config.delay)  
  }

  stopCounter = function(el) {
    clearTimeout(el.countUpTimeout);
    if (el._countUpOrigInnerHTML) {
      el.innerHTML = el._countUpOrigInnerHTML;
      el._countUpOrigInnerHTML = undefined;
    }
    el.style.visibility = '';
  }

  divideNumbers(num, options = {}) {
    const divisions = this.config.duration / this.config.delay;
    const splitValues = num.toString().split( /(<[^>]+>|[0-9.][,.0-9]*[0-9]*)/ );
    const nums = [];

    for (let k = 0; k < divisions; k++) {
      nums.push('');
    }

    for (let i = 0; i < splitValues.length; i++) {
      if ( /([0-9.][,.0-9]*[0-9]*)/.test(splitValues[i]) && ! /<[^>]+>/.test(splitValues[i])) {
        let num = splitValues[i];
        const isComma = /[0-9]+,[0-9]+/.test(num);
        num = num.replace( /,/g, '');

        const isFloat = /^[0-9]+\.[0-9]+$/.test(num);
        const decimalPlaces = isFloat ? (num.split('.')[1] || []).length : 0;
        let k = nums.length - 1;

        for ( let val = divisions; val >= 1; val-- ) {
          let newNum = parseInt( num / divisions * val, 10 )

          if (isFloat) {
            newNum = parseFloat( num / divisions * val ).toFixed( decimalPlaces )
            newNum = parseFloat( newNum ).toLocaleString( lang )
          }
          if (isComma) {
            newNum = newNum.toLocaleString(this.config.lang)
          }
          nums[k--] += newNum
        } 
      } else {
        // Insert all non-numbers in the same place.
        for (let k = 0; k < divisions; k++) {
          nums[k] += splitValues[i]
        } 
      }
    }
    nums[nums.length] = num.toString();

    return nums;
  }
}