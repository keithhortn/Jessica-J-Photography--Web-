// get elements from the DOM
const hamBtn = document.querySelector(".hamburger-container");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");
const hamContainer = document.querySelector(".hamburger-menu-container");
const hamLinks = document.querySelector(".ham-links");
const exit = document.querySelector(".exit-link");

// add event listeners

// open sidebar nav
hamBtn.addEventListener("click", openSideNav);
function openSideNav() {
  if (
    overlay.classList.contains("hidden") &&
    hamContainer.classList.contains("hidden")
  ) {
    overlay.classList.remove("hidden");
    hamContainer.classList.remove("hidden");
    body.style.position = "fixed";
  }
}

// close sidebar nav
exit.addEventListener("click", closeSideNav);
function closeSideNav() {
  overlay.classList.add("hidden");
  hamContainer.classList.add("hidden");
  body.style.position = "static";
}
