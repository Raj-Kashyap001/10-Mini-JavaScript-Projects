const hamburgerBtn = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-list");

hamburgerBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  hamburgerBtn.classList.toggle("active");
});
