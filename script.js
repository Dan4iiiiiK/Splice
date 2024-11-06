const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu__list");
const overlay = document.querySelector(".overlay");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  burger.classList.remove("active");
  menu.classList.remove("active");
  overlay.classList.remove("active");
});

document.querySelector(".menu__link").forEach((el) => {
  el.addEventListener("click", () => {
    burger.classList.remove("active");
    menu.classList.remove("active");
    overlay.classList.remove("active");
  });
});
