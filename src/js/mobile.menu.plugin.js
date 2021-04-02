const body = document.querySelector('body');
const mobileMenu = document.querySelector('.mobile-menu');
const navContainer = document.querySelector('.menu__container');
const mobileMenuBtn = document.querySelector('.mobile-menu__line');
const bodyContainer = document.querySelector('.body__container');
let arrows = document.querySelectorAll('.menu__arrow'); 

let isMobile = {
  Android: function() { return navigator.userAgent.match(/Android/i);},
  iOS: function() {return navigator.userAgent.match(/iPhone|iPOD/i);},
  any: function() {return (isMobile.Android() || isMobile.iOS());}
}

if (isMobile.any()) {
  body.classList.add('touch');
  for(i = 0; i < arrows.length; i++) {
    let submenu = arrows[i].nextElementSibling;
    let thisArrow = arrows[i];
    arrows[i].addEventListener('click', function() {
      thisArrow.classList.toggle('menu__arrow--active');
      submenu.classList.toggle('sub-menu__list--open');
    });
    document.addEventListener('click', function(e) {
      const activeMenuShadow = e.target.classList.contains('mobile-menu__shadow--show');
      if(!activeMenuShadow) {
        return;
      } else {
        if(thisArrow.classList.contains('menu__arrow--active') && submenu.classList.contains('sub-menu__list--open')) {
          thisArrow.classList.toggle('menu__arrow--active');
          submenu.classList.toggle('sub-menu__list--open');
        }
      }
    });
  }
} else {
  body.classList.add('mouse');
}

function moveElement(event) {
  const headerLogo = document.getElementById('logo');
  const menuContainer = document.querySelector('.menu__container');
  const navBar = document.getElementById('navbar');
  const utilityBlock = document.querySelector('.utility');
  const mobileMenuBtn = document.querySelector('.mobile-menu');

  if(window.outerWidth <= 760) {
    let menuShadow = document.createElement('div');
    menuShadow.classList.add('mobile-menu__shadow');
    document.body.append(menuShadow);

    if (headerLogo.parentNode.id === 'topnav') {
      navBar.prepend(headerLogo);
      navBar.prepend(mobileMenuBtn);
      if (navBar.parentNode.id === 'container-navbar') {
        document.getElementById('header').prepend(navBar);
        utilityBlock.classList.add('utility--hidden');
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

mobileMenu.addEventListener('click', () => {
  const mobileShadow = document.querySelector('.mobile-menu__shadow');
  navContainer.classList.toggle('menu__container--active');
  mobileMenuBtn.classList.toggle('mobile-menu__line--active');
  mobileMenu.classList.toggle('mobile-menu--opened');
  mobileShadow.classList.toggle('mobile-menu__shadow--show');
  bodyContainer.classList.toggle('body__container--lock');
});

document.addEventListener('click', function(e) {
  const mobileShadow = document.querySelector('.mobile-menu__shadow');
  const activeMenuShadow = e.target.classList.contains('mobile-menu__shadow--show');
  if(!activeMenuShadow) {
    return;
  } else {
    navContainer.classList.toggle('menu__container--active');
    mobileShadow.classList.toggle('mobile-menu__shadow--show');
    bodyContainer.classList.remove('body__container--lock');
  }
});