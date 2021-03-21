function moveElement(event) {
  const headerLogo = document.getElementById('logo');
  const menuContainer = document.querySelector('.menu__container');
  const navBar = document.getElementById('navbar');
  const utilityBlock = document.querySelector('.utility');
  const mobileMenuBtn = document.querySelector('.mobile-menu');


  if(window.outerWidth < 760) {
    let menuShadow = document.createElement('div');
    menuShadow.classList.add('mobile-menu__shadow');
    document.body.append(menuShadow);

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
const bodyContainer = document.querySelector('.body__container');

mobileMenu.addEventListener('click', () => {
  const mobileShadow = document.querySelector('.mobile-menu__shadow');
  navContainer.classList.toggle('menu__container--active');
  mobileMenuBtn.classList.toggle('mobile-menu__line--active');
  mobileMenu.classList.toggle('mobile-menu--opened');
  mobileShadow.classList.toggle('mobile-menu__shadow--show');
});


document.addEventListener('click', function(e) {
  const activeMenuShadow = e.target.classList.contains('mobile-menu__shadow--show');
  const mobileShadow = document.querySelector('.mobile-menu__shadow');
  if(!activeMenuShadow) {
    return;
  } else {
    console.log('click');
    navContainer.classList.toggle('menu__container--active');
    mobileShadow.classList.toggle('mobile-menu__shadow--show');
  }
})