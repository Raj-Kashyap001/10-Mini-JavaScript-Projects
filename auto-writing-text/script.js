const text = "Hello\n Welcome To My Website!! 😉";

let index = 0;

function writeText() {
  document.body.innerText = text.slice(0, index);
  index++;
  if (index > text.length) index = 0;
  setTimeout(writeText, 100);
}

writeText();
