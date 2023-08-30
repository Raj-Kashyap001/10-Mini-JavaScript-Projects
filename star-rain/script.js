function createStar() {
  const star = document.createElement("span");
  star.className = "star";
  star.innerText = "⭐";
  star.style.left = `${Math.random() * 100}%`;

  document.body.appendChild(star);
  setInterval(() => {
    star.remove();
  }, 3000);
}

setInterval(createStar, 100);
