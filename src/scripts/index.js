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

var directionMenu = 1;
iconMenu.addEventListener("click", (e) => {
  animationMenu.setDirection(directionMenu);
  animationMenu.play();
  directionMenu = -directionMenu;
});
