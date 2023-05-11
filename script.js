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

/*
https://css-tricks.com/updating-a-css-variable-with-javascript/

const root = document.querySelector(":root");
let rootStyles = getComputedStyle(root);
let red = rootStyles.getPropertyValue("--clr-red");
console.log(red);

root.style.setProperty("--clr-red", "70");
console.log(red);
*/

/*
document.body.style.backgroundColor = rgb(inputRed, inputGreen, inputBlue); */

/*document.body.style.backgroundColor =
  "rgb(" + inputRed + ", " + inputGreen + ", " + inputBlue + ")";
*/
