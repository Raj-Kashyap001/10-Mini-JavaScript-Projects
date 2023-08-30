const btn = document.querySelector("#toggle");
const icon = document.querySelector("#icon");

btn.addEventListener("change", () => {
  document.body.classList.toggle("dark", btn.checked);
  if (document.body.classList.contains("dark")) {
    icon.style.stroke = "#fff";
  } else {
    icon.style.stroke = "#000";
  }
});
