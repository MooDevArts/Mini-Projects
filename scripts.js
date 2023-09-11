// Div following mouse effect

let bod = document.getElementsByTagName("body");

bod[0].addEventListener("mousemove", getCoordinates);

let cursor = document.getElementsByClassName("cursor");

function getCoordinates() {
  let x = event.clientX;
  let y = event.clientY;
  cursor[0].style.top = `${y}px`;
  cursor[0].style.left = `${x}px`;
}

// JS experimentation

let promise = new Promise((a, b) => {
  a("haha");
});

console.log(promise);

promise.then((data) => {
  console.log(data);
});
