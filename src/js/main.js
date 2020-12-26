let arrow = document.querySelectorAll('.menu__arrow');

for (i = 0; i < arrow.length; i++) {
  let subMenu = arrow[i].nextElementSibling;
  let thisArrow = arrow[i];
  
  arrow[i].addEventListener('click', () => {
    thisArrow.classList.toggle('menu__arrow--active');
    subMenu.classList.toggle('sub-menu__list--active');
  });
};
