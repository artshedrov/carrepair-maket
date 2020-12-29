// let arrow = document.querySelectorAll('.menu__arrow');
// let myDropdown = document.querySelectorAll('.sub-menu__list');

// for (i = 0; i < arrow.length; i++) {
//   let subMenu = arrow[i].nextElementSibling;
//   let thisArrow = arrow[i];
  
//   arrow[i].addEventListener('click', () => {
//     thisArrow.classList.toggle('menu__arrow--active');
//     subMenu.classList.toggle('sub-menu__list--active');
//   });
// };

// window.addEventListener('click', (e) => {
//   if (!e.target.matches('.menu__arrow')) {
//     for (i = 0; i < myDropdown.length; i++) {
//       let currentDropdown = myDropdown[i];
//       let activeArrow = arrow[i];
//       if (currentDropdown.classList.contains('sub-menu__list--active')) {
//         currentDropdown.classList.remove('sub-menu__list--active');
//         activeArrow.classList.remove('menu__arrow--active');
//       }
//     }
//   }
// });