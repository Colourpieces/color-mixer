let red = 128;
let green = 128;
let blue = 128;

const inputRed = document.querySelector("#red");
inputRed.addEventListener("change", (event) => {
  console.log("red: " + event.target.value);
  red = event.target.value;
  setColor(red, green, blue);
});

const inputGreen = document.querySelector("#green");
inputGreen.addEventListener("change", (event) => {
  console.log("green: " + event.target.value);
  green = event.target.value;
  setColor(red, green, blue);
});

const inputBlue = document.querySelector("#blue");
inputBlue.addEventListener("change", (event) => {
  console.log("blue: " + event.target.value);
  blue = event.target.value;
  setColor(red, green, blue);
});

function setColor(pred, pgreen, pblue) {
  console.log("rgb(" + pred + ", " + pgreen + ", " + pblue + ")");

  const root = document.querySelector(":root");
  root.style.setProperty("--clr-red", pred);
  root.style.setProperty("--clr-green", pgreen);
  root.style.setProperty("--clr-blue", pblue);

  let colorHex = "";
  colorHex = "#" + hexColour(pred) + hexColour(pgreen) + hexColour(pblue);
  document.querySelector("#colorHex").innerText = colorHex;
}

function hexColour(c) {
  if (c < 256) {
    return Math.abs(c).toString(16);
  }
  return 0;
}

//Extension - get random Color

const btnRandomColor = document.querySelector("#randomColor");
btnRandomColor.addEventListener("click", () => {
  const red = getRandomInt(0, 255);
  const green = getRandomInt(0, 255);
  const blue = getRandomInt(0, 255);

  setColor(red, green, blue);
  inputRed.value = red;
  inputGreen.value = green;
  inputBlue.value = blue;
  //setInputRange(red);
  //setInputRange(green);
  //setInputRange(blue);
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function setInputRange(input, value) {
  inputRed.value = value;
}
