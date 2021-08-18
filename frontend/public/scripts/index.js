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
let navLinks = document
  .querySelector("#nav-link-wrapper-mobile")
  .querySelectorAll(".nav-link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-is-open");
  document.body.classList.toggle("stop-scrolling");
});

navLinks.forEach((item) => {
  item.addEventListener("click", (event) => {
    document.body.classList.toggle("nav-is-open");
    document.body.classList.toggle("stop-scrolling");
  });
});

//----------------------------------------
// DVD Logo Animation
//----------------------------------------
let dvdEl = document.querySelector("#dvd-logo");
let heroContainer = document.querySelector("#hero-content");
let containerHeight = heroContainer.offsetHeight;
let containerWidth = heroContainer.offsetWidth;
let dvdElHeight = dvdEl.offsetHeight;
let dvdElWidth = dvdEl.offsetWidth;
const FPS = 60;
dvdEl.style.fill = "#4778ff";

// Logo verlocity variables

let yPosition = 30;
let xPosition = 30;
// let yPosition = Math.floor(Math.random() * (containerHeight - 300));
// let xPosition = Math.floor(Math.random() * (containerWidth - 300));
let xSpeed = 2;
let ySpeed = 2;

function update() {
  dvdEl.style.left = xPosition + "px";
  dvdEl.style.top = yPosition + "px";
}

setInterval(() => {
  if (xPosition + dvdElWidth >= containerWidth || xPosition < 0) {
    xSpeed = -xSpeed;
    dvdEl.style.fill = randomColor();
  } else if (yPosition + dvdElHeight >= containerHeight || yPosition < 0) {
    ySpeed = -ySpeed;
    dvdEl.style.fill = randomColor();
  }
  xPosition += xSpeed;
  yPosition += ySpeed;
  update();
}, 1000 / FPS);

let colorPicker = 0;
function randomColor() {
  let color = "#";
  let colors = ["4778ff", "e06238"];

  if (colorPicker === 0) {
    colorPicker = 1;
    return (color += colors[colorPicker]);
  } else {
    colorPicker = 0;
    return (color += colors[colorPicker]);
  }
}

window.addEventListener("resize", () => {
  containerHeight = heroContainer.offsetHeight;
  containerWidth = heroContainer.offsetWidth;
  dvdElHeight = dvdEl.offsetHeight;
  dvdElWidth = dvdEl.offsetWidth;

  yPosition = yPosition;
  xPosition = xPosition;
});

//----------------------------------------
// Hide Nav on scroll
//----------------------------------------
// let prevScrollpos = window.pageYOffset;

// document.addEventListener("mousemove", (e) => {
//   let mouseY = e.clientY;
//   if (mouseY <= 110) {
//     document.querySelector("nav").style.top = "0";
//   }
// });

// window.onscroll = function () {
//   let currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.querySelector("nav").style.top = "0";
//   } else {
//     document.querySelector("nav").style.top = "-120px";
//   }
//   prevScrollpos = currentScrollPos;
// };

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
