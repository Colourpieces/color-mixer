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
        return ("0" + Math.abs(c).toString(16)).slice(-2);
      }
      return "00";
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
      this.setColor;
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
  },

  watch: {
    red(oldValue, newValue) {
      document.documentElement.style.setProperty("--clr-red", newValue);
    },
    green(oldValue, newValue) {
      document.documentElement.style.setProperty("--clr-green", newValue);
    },
    blue(oldValue, newValue) {
      document.documentElement.style.setProperty("--clr-blue", newValue);
    },
  },
}).mount("#app");
