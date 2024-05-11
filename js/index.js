const navToggle = document.querySelector("#nav-toggle");
const navMenu = document.querySelector("#nav-menu");
const navClose = document.querySelector("#nav-close");
const navLink = document.querySelectorAll(".nav__link");
const wrapper = document.querySelector(`.wrapper`);
const loginLink = document.querySelector(`.login-link`);
const registerLink = document.querySelector(`.register-link`);
const btnPopup = document.querySelector(`.btnLogin`);
const ıconClose = document.querySelector(`.icon-close`);

navToggle.addEventListener("click", () => {
  navMenu.classList.add("show__menu");
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("show__menu");
});

// ------------ LOGİN-REGİSTER MENU------------------
registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

ıconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});

// ---------------  REMOVE MENU MOBILE --------------
navLink.forEach((e) => {
  e.addEventListener("click", () => {
    navMenu.classList.remove("show__menu");
  });
});

const swiperCar = new Swiper(".car__swiper", {
  // Optional parameters

  loop: false,
  speed: 800,
  parallax: true,
  effect: "fade",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    clickable: true,
    formatFractionCurrent: (number) => {
      return number;
    },
    formatFractionTotal: (number) => {
      return number;
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
