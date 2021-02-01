const menuBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const menuMobile = document.querySelector('.header-menu');

menuBtn.addEventListener('click', () =>{
  menuIcon.classList.toggle('active');
  menuMobile.classList.toggle('active');

});
