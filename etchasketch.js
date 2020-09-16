(function () {
  var grid = {
    gridSize: this.input.value,
    random: false,
    init: function () {
      this.cacheDom();
      this.gridSetup();
      this.bindEvents();
      this.fillIn();
    },
    //caches DOM elements to be use in functions
    cacheDom: function () {
      this.randomButton = document.getElementById("randomButton");
      this.resetButton = document.getElementById("resetButton");
      this.updateGridButton = document.getElementById("updateGrid");
      this.input = document.getElementById("input");
      this.mainScreen = document.getElementById("mainScreen");
      this.pixels = "";
    },
    //Adds even listeners to functionality buttons
    bindEvents: function () {
      this.randomButton.addEventListener(
        "click",
        this.randomColorButton.bind(this)
      );
      this.updateGridButton.addEventListener(
        "click",
        this.updateGrid.bind(this)
      );
    },
    //Calculates the size of each pixel based on the grid size and input
    gridSetup: function () {
      let size = this.input.value;
      let gridSize = size * size;
      let pixelSize = 500 / size;
      for (var i = 0; i < gridSize; i++) {
        pixel = document.createElement("div");
        pixel.className = "pixel";
        pixel.style.width = pixelSize + "px";
        pixel.style.height = pixelSize + "px";
        this.mainScreen.append(pixel);
      }
    },
    //Adds listener to each pixel, checks if their color should be black or random
    fillIn: function () {
      this.pixels = Array.from(document.getElementsByClassName("pixel"));
      this.pixels.forEach(function (elem) {
        elem.addEventListener("mouseover", function () {
          if (grid.random === false) {
            elem.style.background = "black";
          } else {
            elem.style.background = grid.getRandomColor();
          }
        });
      });
    },
    //Turns random color on and off
    randomColorButton: function () {
      if (this.random === false) {
        this.random = true;
      } else {
        this.random = false;
      }
    },
    getRandomColor: function () {
      var letters = "0123456789ABCDEF".split("");
      randomColor = "#";
      for (var i = 0; i < 6; i++) {
        randomColor += letters[Math.round(Math.random() * 15)];
      }
      return randomColor;
    },
    //Clear and updates grid based on user's input
    updateGrid: function () {
      this.random = false;
      document.querySelectorAll(".pixel").forEach(function (elem) {
        elem.remove();
      });
      this.gridSetup();
      this.fillIn();
    },
  };
  grid.init();
})();
