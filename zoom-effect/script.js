const container = document.querySelector(".container");
const image = document.querySelector("img");

container.addEventListener("mousemove", (e) => {
  const xAxis = e.clientX - e.target.offsetLeft;
  const yAxis = e.clientY - e.target.offsetTop;
  image.style.transformOrigin = `${xAxis}px ${yAxis}px`;
  image.style.transform = "scale(3)";
  console.log(xAxis, yAxis);
});

container.addEventListener("mouseleave", () => {
  image.removeAttribute("style");
});
