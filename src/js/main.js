const wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       4,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);

const myModal = new Modal({
  linkAttributeName: 'data-modal', 
});

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

const videoIframe = new VideoBlock({
  videoBlock: '.video__block',
  videoLink: '.video__link',
  titleVideoBlock: '.video__header',
  playButton: '.video__button'
})

const tabVideo = new VideoTab({
  videoTabAttribute: '.tab__video',
  videoLinkAttribute: '.video__link',
  tabMediaAttribute: '.video__img',
  playButtonAttribute: '.play-button'
});

wow.init();