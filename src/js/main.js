let arrow = document.querySelectorAll('.menu__arrow');
//let submenu = document.querySelectorAll('.sub-menu__list');

for (i=0; i < arrow.length; i++) {
  let thisLink = arrow[i].previousElementSibling;
  let subMneu = arrow[i].nextElementSibling;
  let thisArrow = arrow[i];
  arrow[i].addEventListener('click', () => {
    thisArrow.classList.toggle('menu__arrow--active');
  //submenu.classList.toggle('sub-menu__list--active');
  });
}; 