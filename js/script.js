'use strict';

const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows());
   }
};

if (isMobile.any()) {
   document.body.classList.add('_touch');
} else {
   document.body.classList.add('_pc');
};

const burger = document.querySelector('.header__burger');
const menuBody = document.querySelector('.header__list');

burger.addEventListener('click', function(e){
burger.classList.toggle('_active');
menuBody.classList.toggle('_active');
document.body.classList.toggle('_lock');
});

const loupe = document.querySelector('.header__loupe');
const form = document.querySelector('.header__form');

loupe.addEventListener('click', function(e){
   loupe.classList.toggle('_active');
   form.classList.toggle('_active');
   });

new Swiper('.furniture-slider',{
   navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
   },
   grabCursor: true,
   slidesPerView: 'auto',
   watchOverflow: true,
});

var menu = ['Shop By Room', 'Shop By Category', 'Shop By Style']
var mySwiper = new Swiper ('.all-furniture-slider', {
   pagination: {
      el: '.swiper-pagination',
			clickable: true,
      renderBullet: function (index, className) {
         return '<span class="' + className + '">' + (menu[index]) + '</span>';
      },
   }
   })

const mainForm = document.forms.main;
const inputMain = mainForm.elements.inp;

mainForm.addEventListener('submit', function(event){
   if(inputMain.value.length === 0){
      mainForm.style.border = '2px solid red';
      event.preventDefault();
   }
})


const home = document.querySelector('.header__link1');
const about = document.querySelector('.header__link2');
const feauters = document.querySelector('.header__link3');
const contact = document.querySelector('.header__link4');

function setScroll1(top){
   const sctHome = document.querySelector('.sectio-main');
   sctHome.scrollIntoView({
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth',
   })
   burger.classList.remove('_active');
   menuBody.classList.remove('_active');
   document.body.classList.remove('_lock');
};
home.addEventListener('click', setScroll1);

function setScroll2(top){
   const sctAbout = document.querySelector('.section-about');
   sctAbout.scrollIntoView({
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth',
   })
   burger.classList.remove('_active');
   menuBody.classList.remove('_active');
   document.body.classList.remove('_lock');
};
about.addEventListener('click', setScroll2);

function setScroll3(top){
   const sctFeauters = document.querySelector('.our-furniture');
   sctFeauters.scrollIntoView({
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth',
   })
   burger.classList.remove('_active');
   menuBody.classList.remove('_active');
   document.body.classList.remove('_lock');
};
feauters.addEventListener('click', setScroll3);

function setScroll4(top){
   const sctContact = document.querySelector('.submit');
   sctContact.scrollIntoView({
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth',
   })
   burger.classList.remove('_active');
   menuBody.classList.remove('_active');
   document.body.classList.remove('_lock');
};
contact.addEventListener('click', setScroll4);


