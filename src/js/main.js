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

window.onresize = moveElement;
window.onload = moveElement;

function moveElement(event) {
  const headerLogo = document.getElementById('logo');
  const menuContainer = document.querySelector('.menu__container');
  const navBar = document.getElementById('navbar');
  const utilityBlock = document.querySelector('.utility');
  const mobileMenuBtn = document.querySelector('.mobile-menu');


  if(window.outerWidth < 760) {
    if (headerLogo.parentNode.id === 'topnav') {
      navBar.prepend(headerLogo);
      navBar.prepend(mobileMenuBtn);
      if (navBar.parentNode.id === 'container-navbar') {
        document.getElementById('header').prepend(navBar);
        menuContainer.append(utilityBlock);
      }  
    }
    return; 
  } else {
    document.getElementById('topnav').prepend(headerLogo);
    document.getElementById('container-navbar').append(navBar);
    document.getElementById('topnav').append(utilityBlock);
  }
}

const mobileMenu = document.querySelector('.mobile-menu');
const navContainer = document.querySelector('.menu__container');
const mobileMenuBtn = document.querySelector('.mobile-menu__line');

mobileMenu.addEventListener('click', () => {
  navContainer.classList.toggle('menu__container--active');
  mobileMenuBtn.classList.toggle('mobile-menu__line--active');
  mobileMenu.classList.toggle('mobile-menu--opened');
});