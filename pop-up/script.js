const openBtn = document.querySelector("#open");
const closeBtn = document.querySelector("#close");
const popUp = document.querySelector(".popup-container");

openBtn.addEventListener("click", () => {
  popUp.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  popUp.classList.remove("active");
});
