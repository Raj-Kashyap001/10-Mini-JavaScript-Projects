const btn = document.getElementById("btn");
const container = document.querySelector(".container");

btn.addEventListener("click", () => {
  createNotification();
});

function createNotification() {
  const notification = document.createElement("div");
  notification.className = "toast";
  notification.innerText = "You got a notification!";
  container.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}
