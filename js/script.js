let burger = document.querySelector(".hamburger"),
  nav = document.querySelector(".header__nav");
burger.addEventListener("click", () => {
  burger.classList.toggle("is-active");
  nav.classList.toggle("active");
});
