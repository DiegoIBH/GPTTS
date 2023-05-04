var button = document.querySelector(".slider-button");
var menu = document.querySelector(".slider-menu ul");

button.addEventListener("click", function() {
  if (menu.style.left === "0px") {
    menu.style.left = "-1200px"; /* Width of all menu items */
  } else {
    menu.style.left = "0px";
  }
});
