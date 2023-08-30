// let red = 128;
// let green = 128;
// let blue = 128;

// const inputRed = document.querySelector("#red");
// inputRed.addEventListener("change", (event) => {
//   red = event.target.value;
//   setColor(red, green, blue);
// });

// const inputGreen = document.querySelector("#green");
// inputGreen.addEventListener("change", (event) => {
//   green = event.target.value;
//   setColor(red, green, blue);
// });

// const inputBlue = document.querySelector("#blue");
// inputBlue.addEventListener("change", (event) => {
//   blue = event.target.value;
//   setColor(red, green, blue);
// });

// function setColor(pred, pgreen, pblue) {
//   console.log("rgb(" + pred + ", " + pgreen + ", " + pblue + ")");

//   const root = document.querySelector(":root");
//   root.style.setProperty("--clr-red", pred);
//   root.style.setProperty("--clr-green", pgreen);
//   root.style.setProperty("--clr-blue", pblue);

//   let colorHex = "";
//   colorHex = "#" + hexColour(pred) + hexColour(pgreen) + hexColour(pblue);
//   document.querySelector("#colorHex").innerText = colorHex;
// }

// function hexColour(c) {
//   if (c < 256) {
//     return Math.abs(c).toString(16);
//   }
//   return 0;
// }

//Extension - get random Color

// const btnRandomColor = document.querySelector("#randomColor");
// btnRandomColor.addEventListener("click", () => {
// fetch("https://dummy-apis.netlify.app/api/color")
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//   })
//   .then((data) => {
//     red = data.rgb.r;
//     green = data.rgb.g;
//     blue = data.rgb.b;
//     setColor(red, green, blue);
//     inputRed.value = red;
//     inputGreen.value = green;
//     inputBlue.value = blue;
//   });
// });

//----------------------------------
const { createApp } = Vue;

createApp({
  data() {
    return {
      red: 128,
      green: 128,
      blue: 128,
    };
  },

  methods: {
    calcHexColour(c) {
      if (c < 256) {
        return Math.abs(c).toString(16);
      }
      return 0;
    },

    setRandomColor() {
      fetch("https://dummy-apis.netlify.app/api/color")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          this.red = data.rgb.r;
          this.green = data.rgb.g;
          this.blue = data.rgb.b;
        });
    },
  },

  computed: {
    hexColor() {
      return (
        "#" +
        this.calcHexColour(this.red) +
        this.calcHexColour(this.green) +
        this.calcHexColour(this.blue)
      );
    },

    setColor() {
      const root = document.querySelector(":root");
      root.style.setProperty("--clr-red", this.red);
      root.style.setProperty("--clr-green", this.green);
      root.style.setProperty("--clr-blue", this.blue);
    },
  },
}).mount("#app");
