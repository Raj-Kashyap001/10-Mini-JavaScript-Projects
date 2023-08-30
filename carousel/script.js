const imageContainer = document.querySelector(".image-container");
const images = imageContainer.querySelectorAll("img");
let index = -1;

function carousel() {
  index++;

  images[index].style.transform = `translateX(${-index * 500}px)`;
  if (index === images.length - 1) {
    index = 0;
    images.forEach((image) => {
      image.style.transform = `translateX(0)`;
    });
  }
  setTimeout(() => {
    carousel();
  }, 2000);
}

carousel();
