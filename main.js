const body = document.body;
const openMenu = document.querySelector("header .open-menu");
const menu = document.querySelector("header .menu");
const closeMenu = document.querySelector("header .close-menu img");
const imgWeb = document.querySelector(".img-web");

openMenu.addEventListener("click", () => {
  menu.classList.add("show");
  body.classList.add("overlay");
  imgWeb.classList.add("overlay");
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("show");
  body.classList.remove("overlay");
  imgWeb.classList.remove("overlay");
});
