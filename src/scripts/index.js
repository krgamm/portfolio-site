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

var count = 0;
function changeColor() {
  if (count === 0) {
    for (let i = 0; i < shapeEl.length; i++) {
      shapeEl[i].classList.add("to-orange");
      shapeEl[i].classList.remove("to-blue");
    }

    count = 1;
  } else {
    for (let i = 0; i < shapeEl.length; i++) {
      shapeEl[i].classList.add("to-blue");
      shapeEl[i].classList.remove("to-orange");
    }
    count = 0;
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
