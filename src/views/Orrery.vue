<template>
  <div></div>
</template>

<style scoped></style>

<script>
import axios from "axios";
import Two from "two.js";

export default {
  data: function () {
    return {
      system: {},
      planets: [],
    };
  },
  created: function () {
    this.systemShow();
    this.planetsShow();
    this.orrery();
  },
  methods: {
    systemShow: function () {
      axios.get("/systems/" + this.$route.params.id).then((response) => {
        this.system = response.data;
        console.log(response.data);
      });
    },
    planetsShow: function () {
      axios.get("/planets/index/" + this.$route.params.id).then((response) => {
        this.planets = response.data;
        console.log(response.data);
      });
    },
    orrery: function () {
      //Initiate the render context

      // var elem = document.getElementById("canvas");
      var two = new Two({
        fullscreen: true,
      }).appendTo(document.body);

      //Skybox
      var sky = two.makeRectangle(two.width / 2, two.height / 2, two.width, two.height);
      sky.fill = "#131e29";
      sky.noStroke();

      //Define our planets and their colors
      var sun = two.makeCircle(0, 0, 70);
      var mercury = two.makeCircle(95, 0, 7);
      var venus = two.makeCircle(125, 0, 8.5);
      var earth = two.makeCircle(160, 0, 11.4);
      var mars = two.makeCircle(200, 0, 9.5);
      var jupiter = two.makeCircle(260, 0, 28);
      //      For Saturn we're going to do something special in order to get the rings
      var saturnBody = two.makeCircle(320, 0, 24);
      var saturnRings = two.makeCurve(296, 0, 290, 10, 322, 10, 350, -8, 342, -10, true);
      saturnRings.rotation = 4.5;
      var saturn = two.makeGroup(saturnBody, saturnRings);
      var uranus = two.makeCircle(460, 0, 18);
      var neptune = two.makeCircle(540, 0, 16);
      var asteroid = two.makeCircle(0, 320, 3);

      // Hover Over Features

      two.update();

      let highlight = function () {
        sun.fill = "red";
      };
      let ignore = function () {
        sun.fill = "yellow";
      };

      let light = function () {
        jupiter.fill = "yellow";
      };
      let ig = function () {
        jupiter.fill = "orange";
      };
      // let info = function () {
      //   this.".jupiterInfo".show();
      // };

      // jupiter._renderer.elem.addEventListener("mousemove", info, false);

      jupiter._renderer.elem.addEventListener("mousemove", light, false);
      jupiter._renderer.elem.addEventListener("mouseout", ig, false);
      sun._renderer.elem.addEventListener("mousemove", highlight, false);
      sun._renderer.elem.addEventListener("mouseout", ignore, false);

      //Try to make some stars
      // const margin = 2;
      // const leftBound = -two.width / 2 + margin;
      // const rightBound = two.width / 2 - margin;
      // const topBound = -two.height / 2 + margin;
      // const bottomBound = two.height / 2 - margin;
      var width = window.innerWidth;
      var height = window.innerHeight;
      var star;
      for (var i = 0; i < 200; i++) {
        var randX = Math.round(Math.random() * width);
        var randY = Math.round(Math.random() * height);
        star = two.makeCircle(randX, randY, 2);
        // star = two.makeCircle(
        //   Math.random(leftBound, rightBound),
        //   Math.random(topBound, bottomBound),
        //   Math.random(1.5, 3.3)
        // );
        // star.fill = "ivory";
        // star.stroke = "slateblue";
      }

      //Set the color of the planets
      sun.fill = "#F7CA18";
      mercury.fill = "#9E9E9E";
      venus.fill = "#795548";
      earth.fill = "#2196F3";
      mars.fill = "#FF7043";
      jupiter.fill = "#E67E22";
      saturnBody.fill = "#A1887F";
      saturnRings.stroke = "#F5F5F5";
      saturnRings.linewidth = 7;
      saturnRings.noFill();
      saturn.translation.set(20, 0);
      uranus.fill = "#4DB6AC";
      neptune.fill = "#3F51B5";
      star.fill = "#FAFAFA";
      asteroid.fill = "#FAFAFA";

      //Group the planets
      var Mercury = two.makeGroup(mercury);
      var Venus = two.makeGroup(venus);
      var Earth = two.makeGroup(earth);
      var Mars = two.makeGroup(mars);
      var Jupiter = two.makeGroup(jupiter);
      var Saturn = two.makeGroup(saturn);
      var Uranus = two.makeGroup(uranus);
      var Neptune = two.makeGroup(neptune);
      var planets = two.makeGroup(sun, Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune);

      //Center everything in the center of the element
      planets.translation.set(two.width / 2, two.height / 2);
      Mercury.rotation = 4;
      Venus.rotation = 2.5;
      Earth.rotation = 5.5;
      Mars.rotation = 1;
      Jupiter.rotation = 4.2;
      Saturn.rotation = 2.5;
      Uranus.rotation = 5.75;
      Neptune.rotation = 0.5;

      // var counter = document.getElementById("counter");
      // var count = 0;
      // var yearsPassed = 0;

      // Bind a function to scale and rotate the group to the animation loop.
      two
        .bind("update", function () {
          //Set the "ZOOM" of the system
          planets.scale = 0.8;

          //Rotate all the planets
          Mercury.rotation += 0.01607;
          Venus.rotation += 0.01174;
          Earth.rotation += 0.01;
          /* //Earth year counter (not currently accurate at all)
	count++;
    if (count % 550 == 0) {
        yearsPassed++;
        counter.innerHTML = "An estimated " + yearsPassed + " Earth years passed";
    }; */
          Mars.rotation += 0.00802;
          Jupiter.rotation += 0.00434;
          Saturn.rotation += 0.00323;
          Uranus.rotation += 0.00228;
          Neptune.rotation += 0.00182;

          //Rotate Saturn's rings so that it doesn't look dumb
          saturnRings.rotation -= 0.01423;
        })
        .play(); // Finally, start the animation loop
    },
  },
};
</script>
