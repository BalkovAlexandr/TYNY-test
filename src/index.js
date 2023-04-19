import './index.html';
import './index.scss';
import './modules/validation';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


const iconMenu = document.querySelector('.header__icon')
const burgerMenu = document.querySelector('.header__menu')
const headerContainer = document.querySelector('.header__container')

iconMenu.addEventListener('click', () => {
  iconMenu.classList.toggle('_active')
  burgerMenu.classList.toggle('_active')
  headerContainer.classList.toggle('_active')
})

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',

  loop: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  spaceBetween: 40,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    }
  }

});



