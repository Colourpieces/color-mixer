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
