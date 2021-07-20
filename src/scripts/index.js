import lottie from "lottie-web";
import data from "./data.json";

let iconMenu = document.querySelector("#theme-toggle");

let animationMenu = lottie.loadAnimation({
  container: iconMenu,
  renderer: "svg",
  loop: false,
  autoplay: false,
  animationData: data,
});

animationMenu.goToAndStop(25, true);
var directionMenu = -1;
iconMenu.addEventListener("click", (e) => {
  changeColor();
  animationMenu.setDirection(directionMenu);
  animationMenu.play();
  directionMenu = -directionMenu;
});

//----------------------------------------
// Apply and change color of theme switcher
//----------------------------------------

let shapeEl = iconMenu.getElementsByTagName("path", "g");

for (let i = 0; i < shapeEl.length; i++) {
  shapeEl[i].classList.add("to-blue");
}

var themeCount = 0;
function changeColor() {
  if (themeCount === 0) {
    for (let i = 0; i < shapeEl.length; i++) {
      shapeEl[i].classList.add("to-orange");
      shapeEl[i].classList.remove("to-blue");
    }

    themeCount = 1;
  } else {
    for (let i = 0; i < shapeEl.length; i++) {
      shapeEl[i].classList.add("to-blue");
      shapeEl[i].classList.remove("to-orange");
    }
    themeCount = 0;
  }
}

//----------------------------------------
// Mobile Navigation
//----------------------------------------
let navToggle = document.querySelector("#mobile-menu-btn");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-is-open");
  document.body.classList.toggle("stop-scrolling");
});

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
