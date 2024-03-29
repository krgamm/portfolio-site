// import lottie from "./vendors/lottie.js";
// import data from "./data.json";

// let iconMenu = document.querySelector("#theme-toggle");

// let animationMenu = lottie.loadAnimation({
//   container: iconMenu,
//   renderer: "svg",
//   loop: false,
//   autoplay: false,
//   path: data,
// });

// animationMenu.goToAndStop(25, true);
// var directionMenu = -1;
// iconMenu.addEventListener("click", (e) => {
//   changeColor();
//   animationMenu.setDirection(directionMenu);
//   animationMenu.play();
//   directionMenu = -directionMenu;
// });

// //----------------------------------------
// // Apply and change color of theme switcher
// //----------------------------------------

// let shapeEl = iconMenu.getElementsByTagName("path", "g");

// for (let i = 0; i < shapeEl.length; i++) {
//   shapeEl[i].classList.add("to-blue");
// }

// var themeCount = 0;
// function changeColor() {
//   if (themeCount === 0) {
//     for (let i = 0; i < shapeEl.length; i++) {
//       shapeEl[i].classList.add("to-orange");
//       shapeEl[i].classList.remove("to-blue");
//     }

//     themeCount = 1;
//   } else {
//     for (let i = 0; i < shapeEl.length; i++) {
//       shapeEl[i].classList.add("to-blue");
//       shapeEl[i].classList.remove("to-orange");
//     }
//     themeCount = 0;
//   }
// }

//----------------------------------------
// Mobile Navigation
//----------------------------------------
let navToggle = document.querySelector("#mobile-menu-btn");
let count = 0;
navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-is-open");
  document.body.classList.toggle("stop-scrolling");

  count++;
  console.log(count);
});

//----------------------------------------
// Hide Nav on scroll
//----------------------------------------
let prevScrollpos = window.pageYOffset;

document.addEventListener("mousemove", (e) => {
  let mouseY = e.clientY;
  if (mouseY <= 110) {
    document.querySelector("nav").style.top = "0";
  }
});

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("nav").style.top = "0";
  } else {
    document.querySelector("nav").style.top = "-120px";
  }
  prevScrollpos = currentScrollPos;
};

//----------------------------------------
// Carousel Interaction
//----------------------------------------

// const carouselSlide = document.querySelector(".carousel-slide");
// const carouselImages = document.querySelectorAll(".carousel-slide img");

// // Carousel Buttons
// const prevBtn = document.querySelector("#prevBtn");
// const nextBtn = document.querySelector("#nextBtn");

// // Counter
// let counter = 1;
// const size = carouselImages[0].clientWidth;

// carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

// //Btn Listeners
// nextBtn.addEventListener("click", () => {
//   carouselSlide.style.transition = "transform 0.4s ease-in-out";
//   counter++;
//   carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
// });
