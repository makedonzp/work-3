let hamburgerBtn = document.querySelector(".header__hamburger-menu");
let nav = document.querySelector(".header__nav");

hamburgerBtn.addEventListener("click", function () {
  let a = nav;
  a.classList.toggle("show");
});
