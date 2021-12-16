<template>
  <div class="home">
    <div v-for="planet in planets" :key="planet.id">
      <div>
        <h1>{{ planet.name }}</h1>
      </div>
    </div>
  </div>
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
    this.determinePlanets();
  },
  methods: {
    systemShow: function () {
      axios.get("/systems/" + this.$route.params.id).then((response) => {
        this.system = response.data;
        // console.log(response.data);
      });
    },
    determinePlanets: function () {
      axios.get("/planets/index/" + this.$route.params.id).then((response) => {
        let planetCount = response.data;
        let i = planetCount.length;
        console.log(i);
        if (i === 4) {
          this.orreryFour();
        } else if (i === 3) {
          this.orreryThree();
        } else if (i === 2) {
          this.orreryTwo();
        } else if (i === 1) {
          this.orreryOne();
        } else if (i === 5) {
          this.orreryFive();
        } else if (i === 6) {
          this.orrerySix();
        } else if (i === 7) {
          this.orrerySeven();
        } else if (i === 8) {
          this.orreryEight();
        } else if (i === 9) {
          this.orreryNine();
        } else if (i === 10) {
          this.orreryTen();
        }
      });
    },
    orreryOne: function () {
      // Get planet info
      axios.get("/planets/index/" + this.$route.params.id).then((response) => {
        this.planets = response.data;
        let planet_list = response.data;
        planet_list.sort((a, b) => (a.orbital_distance > b.orbital_distance ? 1 : -1));
        planet_list.sort((a, b) => (a.is_star > b.is_star ? -1 : 1));
        console.log(planet_list);

        //Initiate the render context

        var two = new Two({
          fullscreen: true,
        }).appendTo(document.body);

        //Skybox
        var sky = two.makeRectangle(two.width / 2, two.height / 2, two.width, two.height);
        sky.fill = "#131e29";
        sky.noStroke();

        //Define our planets and their colors
        var sun = two.makeCircle(960, 540, 75);

        // Hover Over Features

        two.update();

        const styles = {
          family: "Lexend Deca, sans-serif",
        };

        let highlight_1 = function () {
          var central_star = planet_list[0];
          var box = two.makeRectangle(350, 200, 600, 150);
          box.fill = "white";
          box.stroke = "#09C8E2";
          var sun_info = two.makeText(`${central_star.name}`, 350, 175, styles);
          sun_info.size = 75;
          var sunMass = two.makeText(`Mass: ${central_star.mass} x 10^24 Kilos`, 350, 225, styles);
          sunMass.size = 35;
          var sunDiameter = two.makeText(`Diameter: ${central_star.diameter} Kilometers`, 350, 260, styles);
          sunDiameter.size = 35;
          sun.stroke = "#09C8E2";
          sun.linewidth = 3;
          let ignore_1 = function () {
            two.remove(sun_info);
            two.remove(box);
            two.remove(sunDiameter);
            two.remove(sunMass);
            sun.linewidth = 0;
            sun.stroke = "black";
          };
          sun._renderer.elem.addEventListener("mouseout", ignore_1, false);
        };
        sun._renderer.elem.addEventListener("mousemove", highlight_1, false);

        // Stars
        var width = window.innerWidth;
        var height = window.innerHeight;
        var star;
        for (var i = 0; i < 200; i++) {
          var randX = Math.round(Math.random() * width);
          var randY = Math.round(Math.random() * height);
          star = two.makeCircle(randX, randY, 2);
        }

        //Set the color of the planets
        sun.fill = planet_list[0].color;
        star.fill = "#FAFAFA";

        two.bind("update", function () {}).play(); // Finally, start the animation loop
      });
    },
    orreryTwo: function () {
      // Get planet info
      axios.get("/planets/index/" + this.$route.params.id).then((response) => {
        this.planets = response.data;
        let planet_list = response.data;
        planet_list.sort((a, b) => (a.orbital_distance > b.orbital_distance ? 1 : -1));
        planet_list.sort((a, b) => (a.is_star > b.is_star ? -1 : 1));
        console.log(planet_list);

        //Initiate the render context

        var two = new Two({
          fullscreen: true,
        }).appendTo(document.body);

        //Skybox
        var sky = two.makeRectangle(two.width / 2, two.height / 2, two.width, two.height);
        sky.fill = "#131e29";
        sky.noStroke();

        //Define our planets and their colors
        var sun = two.makeCircle(0, 0, 75);

        var planetOne = two.makeCircle(planet_list[1].orbital_distance * 235, 0, planet_list[1].diameter / 2000);
        var planetOneOrbit = two.makeCircle(0, 0, planet_list[1].orbital_distance * 235);
        planetOneOrbit.noFill();
        planetOneOrbit.linewidth = 2;
        planetOneOrbit.stroke = "#ccc";

        // Hover Over Features

        two.update();

        const styles = {
          family: "Lexend Deca, sans-serif",
        };

        let highlight_1 = function () {
          var central_star = planet_list[0];
          var box = two.makeRectangle(350, 200, 600, 150);
          box.fill = "white";
          box.stroke = "#09C8E2";
          var sun_info = two.makeText(`${central_star.name}`, 350, 175, styles);
          sun_info.size = 75;
          var sunMass = two.makeText(`Mass: ${central_star.mass} x 10^24 Kilos`, 350, 225, styles);
          sunMass.size = 35;
          var sunDiameter = two.makeText(`Diameter: ${central_star.diameter} Kilometers`, 350, 260, styles);
          sunDiameter.size = 35;
          sun.stroke = "#09C8E2";
          sun.linewidth = 3;
          let ignore_1 = function () {
            two.remove(sun_info);
            two.remove(box);
            two.remove(sunDiameter);
            two.remove(sunMass);
            sun.linewidth = 0;
            sun.stroke = "black";
          };
          sun._renderer.elem.addEventListener("mouseout", ignore_1, false);
        };
        sun._renderer.elem.addEventListener("mousemove", highlight_1, false);

        let highlight_2 = function () {
          var box = two.makeRectangle(350, 240, 600, 235);
          box.fill = "white";
          box.stroke = "#09C8E2";
          var planetOneInfo = two.makeText(planet_list[1].name, 350, 175);
          planetOneInfo.size = 75;
          var planetOneDistance = two.makeText(
            `Orbital Distance: ${planet_list[1].orbital_distance} AU`,
            350,
            225,
            styles
          );
          planetOneDistance.size = 35;
          var planetOnePeriod = two.makeText(`Orbital Period: ${planet_list[1].orbital_period} days`, 350, 260, styles);
          planetOnePeriod.size = 35;
          var planetOneDiameter = two.makeText(`Diameter: ${planet_list[1].diameter} Kilometers`, 350, 295, styles);
          planetOneDiameter.size = 35;
          var planetOneMass = two.makeText(`Mass: ${planet_list[1].mass} x 10^24 Kilos`, 350, 330, styles);
          planetOneMass.size = 35;
          planetOneOrbit.stroke = "#09C8E2";
          planetOne.stroke = "#09C8E2";
          planetOne.linewidth = 3;
          let ignore_2 = function () {
            two.remove(planetOneInfo);
            two.remove(box);
            two.remove(planetOneDistance);
            two.remove(planetOnePeriod);
            two.remove(planetOneDiameter);
            two.remove(planetOneMass);
            planetOne.linewidth = 0;
            planetOneOrbit.stroke = "white";
            planetOne.stroke = "black";
          };
          planetOneOrbit._renderer.elem.addEventListener("mouseout", ignore_2, false);
        };
        planetOneOrbit._renderer.elem.addEventListener("mousemove", highlight_2, false);

        // Stars
        var width = window.innerWidth;
        var height = window.innerHeight;
        var star;
        for (var i = 0; i < 200; i++) {
          var randX = Math.round(Math.random() * width);
          var randY = Math.round(Math.random() * height);
          star = two.makeCircle(randX, randY, 2);
        }

        //Set the color of the planets
        sun.fill = planet_list[0].color;
        planetOne.fill = planet_list[1].color;
        star.fill = "#FAFAFA";

        //Group the planets
        var PlanetOne = two.makeGroup(planetOne);

        var planets = two.makeGroup(planetOneOrbit, sun, PlanetOne);

        //Center everything in the center of the element
        planets.translation.set(two.width / 2, two.height / 2);
        // Mercury.rotation = 4;
        PlanetOne.rotation = 3;

        // Bind a function to scale and rotate the group to the animation loop.
        two
          .bind("update", function () {
            //Set the "ZOOM" of the system
            planets.scale = 0.8;

            //Rotate all the planets
            var speedOne = planet_list[1].orbital_period * 100;

            PlanetOne.rotation += 365 / speedOne;
          })
          .play(); // Finally, start the animation loop
      });
    },
    orreryThree: function () {
      // Get planet info
      axios.get("/planets/index/" + this.$route.params.id).then((response) => {
        this.planets = response.data;
        let planet_list = response.data;
        planet_list.sort((a, b) => (a.orbital_distance > b.orbital_distance ? 1 : -1));
        planet_list.sort((a, b) => (a.is_star > b.is_star ? -1 : 1));
        console.log(planet_list);

        //Initiate the render context

        var two = new Two({
          fullscreen: true,
        }).appendTo(document.body);

        //Skybox
        var sky = two.makeRectangle(two.width / 2, two.height / 2, two.width, two.height);
        sky.fill = "#131e29";
        sky.noStroke();

        //Define our planets and their colors
        var sun = two.makeCircle(0, 0, 75);

        var planetOne = two.makeCircle(planet_list[1].orbital_distance * 235, 0, planet_list[1].diameter / 2000);
        var planetOneOrbit = two.makeCircle(0, 0, planet_list[1].orbital_distance * 235);
        planetOneOrbit.noFill();
        planetOneOrbit.linewidth = 2;
        planetOneOrbit.stroke = "#ccc";

        var planetTwo = two.makeCircle(planet_list[2].orbital_distance * 235, 0, planet_list[2].diameter / 2000);
        var planetTwoOrbit = two.makeCircle(0, 0, planet_list[2].orbital_distance * 235);
        planetTwoOrbit.noFill();
        planetTwoOrbit.linewidth = 2;
        planetTwoOrbit.stroke = "#ccc";

        // Hover Over Features

        two.update();

        const styles = {
          family: "Lexend Deca, sans-serif",
        };

        let highlight_1 = function () {
          var central_star = planet_list[0];
          var box = two.makeRectangle(350, 200, 600, 150);
          box.fill = "white";
          box.stroke = "#09C8E2";
          var sun_info = two.makeText(`${central_star.name}`, 350, 175, styles);
          sun_info.size = 75;
          var sunMass = two.makeText(`Mass: ${central_star.mass} x 10^24 Kilos`, 350, 225, styles);
          sunMass.size = 35;
          var sunDiameter = two.makeText(`Diameter: ${central_star.diameter} Kilometers`, 350, 260, styles);
          sunDiameter.size = 35;
          sun.stroke = "#09C8E2";
          sun.linewidth = 3;
          let ignore_1 = function () {
            two.remove(sun_info);
            two.remove(box);
            two.remove(sunDiameter);
            two.remove(sunMass);
            sun.linewidth = 0;
            sun.stroke = "black";
          };
          sun._renderer.elem.addEventListener("mouseout", ignore_1, false);
        };
        sun._renderer.elem.addEventListener("mousemove", highlight_1, false);

        let highlight_2 = function () {
          var box = two.makeRectangle(350, 240, 600, 235);
          box.fill = "white";
          box.stroke = "#09C8E2";
          var planetOneInfo = two.makeText(planet_list[1].name, 350, 175);
          planetOneInfo.size = 75;
          var planetOneDistance = two.makeText(
            `Orbital Distance: ${planet_list[1].orbital_distance} AU`,
            350,
            225,
            styles
          );
          planetOneDistance.size = 35;
          var planetOnePeriod = two.makeText(`Orbital Period: ${planet_list[1].orbital_period} days`, 350, 260, styles);
          planetOnePeriod.size = 35;
          var planetOneDiameter = two.makeText(`Diameter: ${planet_list[1].diameter} Kilometers`, 350, 295, styles);
          planetOneDiameter.size = 35;
          var planetOneMass = two.makeText(`Mass: ${planet_list[1].mass} x 10^24 Kilos`, 350, 330, styles);
          planetOneMass.size = 35;
          planetOneOrbit.stroke = "#09C8E2";
          planetOne.stroke = "#09C8E2";
          planetOne.linewidth = 3;
          let ignore_2 = function () {
            two.remove(planetOneInfo);
            two.remove(box);
            two.remove(planetOneDistance);
            two.remove(planetOnePeriod);
            two.remove(planetOneDiameter);
            two.remove(planetOneMass);
            planetOne.linewidth = 0;
            planetOneOrbit.stroke = "white";
            planetOne.stroke = "black";
          };
          planetOneOrbit._renderer.elem.addEventListener("mouseout", ignore_2, false);
        };
        planetOneOrbit._renderer.elem.addEventListener("mousemove", highlight_2, false);

        let highlight_3 = function () {
          var box = two.makeRectangle(350, 240, 600, 235);
          box.fill = "white";
          box.stroke = "#09C8E2";
          var planetTwoInfo = two.makeText(planet_list[2].name, 350, 175);
          planetTwoInfo.size = 75;
          var planetTwoDistance = two.makeText(
            `Orbital Distance: ${planet_list[2].orbital_distance} AU`,
            350,
            225,
            styles
          );
          planetTwoDistance.size = 35;
          var planetTwoPeriod = two.makeText(`Orbital Period: ${planet_list[2].orbital_period} days`, 350, 260, styles);
          planetTwoPeriod.size = 35;
          var planetTwoDiameter = two.makeText(`Diameter: ${planet_list[2].diameter} Kilometers`, 350, 295, styles);
          planetTwoDiameter.size = 35;
          var planetTwoMass = two.makeText(`Mass: ${planet_list[2].mass} x 10^24 Kilos`, 350, 330, styles);
          planetTwoMass.size = 35;
          planetTwoOrbit.stroke = "#09C8E2";
          planetTwo.stroke = "#09C8E2";
          planetTwo.linewidth = 3;
          let ignore_3 = function () {
            two.remove(planetTwoInfo);
            two.remove(box);
            two.remove(planetTwoDistance);
            two.remove(planetTwoPeriod);
            two.remove(planetTwoDiameter);
            two.remove(planetTwoMass);
            planetTwo.linewidth = 0;
            planetTwoOrbit.stroke = "white";
            planetTwo.stroke = "black";
          };
          planetTwoOrbit._renderer.elem.addEventListener("mouseout", ignore_3, false);
        };
        planetTwoOrbit._renderer.elem.addEventListener("mousemove", highlight_3, false);

        // Stars
        var width = window.innerWidth;
        var height = window.innerHeight;
        var star;
        for (var i = 0; i < 200; i++) {
          var randX = Math.round(Math.random() * width);
          var randY = Math.round(Math.random() * height);
          star = two.makeCircle(randX, randY, 2);
        }

        //Set the color of the planets
        sun.fill = planet_list[0].color;
        planetOne.fill = planet_list[1].color;
        planetTwo.fill = planet_list[2].color;
        star.fill = "#FAFAFA";

        //Group the planets
        var PlanetOne = two.makeGroup(planetOne);
        var PlanetTwo = two.makeGroup(planetTwo);

        var planets = two.makeGroup(planetTwoOrbit, planetOneOrbit, sun, PlanetOne, PlanetTwo);

        //Center everything in the center of the element
        planets.translation.set(two.width / 2, two.height / 2);
        // Mercury.rotation = 4;
        PlanetOne.rotation = 3;
        PlanetTwo.rotation = 4;

        // Bind a function to scale and rotate the group to the animation loop.
        two
          .bind("update", function () {
            //Set the "ZOOM" of the system
            planets.scale = 0.8;

            //Rotate all the planets
            var speedOne = planet_list[1].orbital_period * 100;
            var speedTwo = planet_list[2].orbital_period * 100;

            PlanetOne.rotation += 365 / speedOne;
            PlanetTwo.rotation += 365 / speedTwo;
          })
          .play(); // Finally, start the animation loop
      });
    },
    orreryFour: function () {
      // Get planet info
      axios.get("/planets/index/" + this.$route.params.id).then((response) => {
        this.planets = response.data;
        let planet_list = response.data;
        planet_list.sort((a, b) => (a.orbital_distance > b.orbital_distance ? 1 : -1));
        planet_list.sort((a, b) => (a.is_star > b.is_star ? -1 : 1));
        console.log(planet_list);

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
        var sun = two.makeCircle(0, 0, 75);

        var planetOne = two.makeCircle(planet_list[1].orbital_distance * 235, 0, planet_list[1].diameter / 2000);
        var planetOneOrbit = two.makeCircle(0, 0, planet_list[1].orbital_distance * 235);
        planetOneOrbit.noFill();
        planetOneOrbit.linewidth = 2;
        planetOneOrbit.stroke = "#ccc";

        var planetTwo = two.makeCircle(planet_list[2].orbital_distance * 235, 0, planet_list[2].diameter / 2000);
        var planetTwoOrbit = two.makeCircle(0, 0, planet_list[2].orbital_distance * 235);
        planetTwoOrbit.noFill();
        planetTwoOrbit.linewidth = 2;
        planetTwoOrbit.stroke = "#ccc";

        var planetThree = two.makeCircle(planet_list[3].orbital_distance * 235, 0, planet_list[3].diameter / 2000);
        var planetThreeOrbit = two.makeCircle(0, 0, planet_list[3].orbital_distance * 235);
        planetThreeOrbit.noFill();
        planetThreeOrbit.linewidth = 2;
        planetThreeOrbit.stroke = "#ccc";
        // var venus = two.makeCircle(125, 0, 8.5);
        // var earth = two.makeCircle(160, 0, 11.4);
        // var mars = two.makeCircle(200, 0, 9.5);
        // var jupiter = two.makeCircle(260, 0, 28);
        // var jupiterOrbit = two.makeCircle(0, 0, 260);
        // jupiterOrbit.noFill();
        // jupiterOrbit.linewidth = 2;
        // jupiterOrbit.stroke = "#ccc";
        // //      For Saturn we're going to do something special in order to get the rings
        // var saturnBody = two.makeCircle(320, 0, 24);
        // var saturnRings = two.makeCurve(296, 0, 290, 10, 322, 10, 350, -8, 342, -10, true);
        // saturnRings.rotation = 4.5;
        // var saturn = two.makeGroup(saturnBody, saturnRings);
        // var uranus = two.makeCircle(460, 0, 18);
        // var neptune = two.makeCircle(540, 0, 16);
        // var asteroid = two.makeCircle(0, 320, 3);

        // Hover Over Features

        two.update();

        const styles = {
          family: "Lexend Deca, sans-serif",
        };

        let highlight_1 = function () {
          var central_star = planet_list[0];
          var box = two.makeRectangle(350, 200, 600, 150);
          box.fill = "white";
          box.stroke = "#09C8E2";
          var sun_info = two.makeText(`${central_star.name}`, 350, 175, styles);
          sun_info.size = 75;
          var sunMass = two.makeText(`Mass: ${central_star.mass} x 10^24 Kilos`, 350, 225, styles);
          sunMass.size = 35;
          var sunDiameter = two.makeText(`Diameter: ${central_star.diameter} Kilometers`, 350, 260, styles);
          sunDiameter.size = 35;
          sun.stroke = "#09C8E2";
          sun.linewidth = 3;
          let ignore_1 = function () {
            two.remove(sun_info);
            two.remove(box);
            two.remove(sunDiameter);
            two.remove(sunMass);
            sun.linewidth = 0;
            sun.stroke = "black";
          };
          sun._renderer.elem.addEventListener("mouseout", ignore_1, false);
        };
        sun._renderer.elem.addEventListener("mousemove", highlight_1, false);

        let highlight_2 = function () {
          var box = two.makeRectangle(350, 240, 600, 235);
          box.fill = "white";
          box.stroke = "#09C8E2";
          var planetOneInfo = two.makeText(planet_list[1].name, 350, 175);
          planetOneInfo.size = 75;
          var planetOneDistance = two.makeText(
            `Orbital Distance: ${planet_list[1].orbital_distance} AU`,
            350,
            225,
            styles
          );
          planetOneDistance.size = 35;
          var planetOnePeriod = two.makeText(`Orbital Period: ${planet_list[1].orbital_period} days`, 350, 260, styles);
          planetOnePeriod.size = 35;
          var planetOneDiameter = two.makeText(`Diameter: ${planet_list[1].diameter} Kilometers`, 350, 295, styles);
          planetOneDiameter.size = 35;
          var planetOneMass = two.makeText(`Mass: ${planet_list[1].mass} x 10^24 Kilos`, 350, 330, styles);
          planetOneMass.size = 35;
          planetOneOrbit.stroke = "#09C8E2";
          planetOne.stroke = "#09C8E2";
          planetOne.linewidth = 3;
          let ignore_2 = function () {
            two.remove(planetOneInfo);
            two.remove(box);
            two.remove(planetOneDistance);
            two.remove(planetOnePeriod);
            two.remove(planetOneDiameter);
            two.remove(planetOneMass);
            planetOne.linewidth = 0;
            planetOneOrbit.stroke = "white";
            planetOne.stroke = "black";
          };
          planetOneOrbit._renderer.elem.addEventListener("mouseout", ignore_2, false);
        };
        planetOneOrbit._renderer.elem.addEventListener("mousemove", highlight_2, false);

        let highlight_3 = function () {
          var box = two.makeRectangle(350, 240, 600, 235);
          box.fill = "white";
          box.stroke = "#09C8E2";
          var planetTwoInfo = two.makeText(planet_list[2].name, 350, 175);
          planetTwoInfo.size = 75;
          var planetTwoDistance = two.makeText(
            `Orbital Distance: ${planet_list[2].orbital_distance} AU`,
            350,
            225,
            styles
          );
          planetTwoDistance.size = 35;
          var planetTwoPeriod = two.makeText(`Orbital Period: ${planet_list[2].orbital_period} days`, 350, 260, styles);
          planetTwoPeriod.size = 35;
          var planetTwoDiameter = two.makeText(`Diameter: ${planet_list[2].diameter} Kilometers`, 350, 295, styles);
          planetTwoDiameter.size = 35;
          var planetTwoMass = two.makeText(`Mass: ${planet_list[2].mass} x 10^24 Kilos`, 350, 330, styles);
          planetTwoMass.size = 35;
          planetTwoOrbit.stroke = "#09C8E2";
          planetTwo.stroke = "#09C8E2";
          planetTwo.linewidth = 3;
          let ignore_3 = function () {
            two.remove(planetTwoInfo);
            two.remove(box);
            two.remove(planetTwoDistance);
            two.remove(planetTwoPeriod);
            two.remove(planetTwoDiameter);
            two.remove(planetTwoMass);
            planetTwo.linewidth = 0;
            planetTwoOrbit.stroke = "white";
            planetTwo.stroke = "black";
          };
          planetTwoOrbit._renderer.elem.addEventListener("mouseout", ignore_3, false);
        };
        planetTwoOrbit._renderer.elem.addEventListener("mousemove", highlight_3, false);

        let highlight_4 = function () {
          var box = two.makeRectangle(350, 240, 600, 235);
          box.fill = "white";
          box.stroke = "#09C8E2";
          var planetThreeInfo = two.makeText(planet_list[3].name, 350, 175);
          planetThreeInfo.size = 75;
          var planetThreeDistance = two.makeText(
            `Orbital Distance: ${planet_list[3].orbital_distance} AU`,
            350,
            225,
            styles
          );
          planetThreeDistance.size = 35;
          var planetThreePeriod = two.makeText(
            `Orbital Period: ${planet_list[3].orbital_period} days`,
            350,
            260,
            styles
          );
          planetThreePeriod.size = 35;
          var planetThreeDiameter = two.makeText(`Diameter: ${planet_list[3].diameter} Kilometers`, 350, 295, styles);
          planetThreeDiameter.size = 35;
          var planetThreeMass = two.makeText(`Mass: ${planet_list[3].mass} x 10^24 Kilos`, 350, 330, styles);
          planetThreeMass.size = 35;
          planetThreeOrbit.stroke = "#09C8E2";
          planetThree.stroke = "#09C8E2";
          planetThree.linewidth = 3;
          let ignore_4 = function () {
            two.remove(planetThreeInfo);
            two.remove(box);
            two.remove(planetThreeDistance);
            two.remove(planetThreePeriod);
            two.remove(planetThreeDiameter);
            two.remove(planetThreeMass);
            planetThree.linewidth = 0;
            planetThreeOrbit.stroke = "white";
            planetThree.stroke = "black";
          };
          planetThreeOrbit._renderer.elem.addEventListener("mouseout", ignore_4, false);
        };
        planetThreeOrbit._renderer.elem.addEventListener("mousemove", highlight_4, false);

        // let highlight_3 = function () {
        //   var sun_info = two.makeText("Jupiter", 350, 250);
        //   sun_info.size = 100;
        //   jupiter.fill = "red";
        //   let ignore_3 = function () {
        //     two.remove(sun_info);
        //     jupiter.fill = "orange";
        //   };
        //   jupiterOrbit._renderer.elem.addEventListener("mouseout", ignore_3, false);
        // };
        // jupiterOrbit._renderer.elem.addEventListener("mousemove", highlight_3, false);

        // Stars
        var width = window.innerWidth;
        var height = window.innerHeight;
        var star;
        for (var i = 0; i < 200; i++) {
          var randX = Math.round(Math.random() * width);
          var randY = Math.round(Math.random() * height);
          star = two.makeCircle(randX, randY, 2);
        }

        //Set the color of the planets
        sun.fill = planet_list[0].color;
        // mercury.fill = "#9E9E9E";
        planetOne.fill = planet_list[1].color;
        planetTwo.fill = planet_list[2].color;
        planetThree.fill = planet_list[3].color;

        // venus.fill = "#795548";
        // earth.fill = "#2196F3";
        // mars.fill = "#FF7043";
        // jupiter.fill = "#E67E22";
        // saturnBody.fill = "#A1887F";
        // saturnRings.stroke = "#F5F5F5";
        // saturnRings.linewidth = 7;
        // saturnRings.noFill();
        // saturn.translation.set(20, 0);
        // uranus.fill = "#4DB6AC";
        // neptune.fill = "#3F51B5";
        star.fill = "#FAFAFA";
        // asteroid.fill = "#FAFAFA";

        //Group the planets
        // var Mercury = two.makeGroup(mercury);
        var PlanetOne = two.makeGroup(planetOne);
        var PlanetTwo = two.makeGroup(planetTwo);
        var PlanetThree = two.makeGroup(planetThree);

        // var Venus = two.makeGroup(venus);
        // var Earth = two.makeGroup(earth);
        // var Mars = two.makeGroup(mars);
        // var Jupiter = two.makeGroup(jupiter);
        // var Saturn = two.makeGroup(saturn);
        // var Uranus = two.makeGroup(uranus);
        // var Neptune = two.makeGroup(neptune);
        var planets = two.makeGroup(
          planetThreeOrbit,
          planetTwoOrbit,
          planetOneOrbit,
          sun,
          PlanetOne,
          PlanetTwo,
          PlanetThree
        );

        //Center everything in the center of the element
        planets.translation.set(two.width / 2, two.height / 2);
        // Mercury.rotation = 4;
        PlanetOne.rotation = 3;
        PlanetTwo.rotation = 4;
        PlanetThree.rotation = 5;

        // Venus.rotation = 2.5;
        // Earth.rotation = 5.5;
        // Mars.rotation = 1;
        // Jupiter.rotation = 4.2;
        // Saturn.rotation = 2.5;
        // Uranus.rotation = 5.75;
        // Neptune.rotation = 0.5;

        // var counter = document.getElementById("counter");
        // var count = 0;
        // var yearsPassed = 0;

        // Bind a function to scale and rotate the group to the animation loop.
        two
          .bind("update", function () {
            //Set the "ZOOM" of the system
            planets.scale = 0.8;

            //Rotate all the planets
            // Mercury.rotation += 88 / 36500;
            var speedOne = planet_list[1].orbital_period * 100;
            var speedTwo = planet_list[2].orbital_period * 100;
            var speedThree = planet_list[3].orbital_period * 100;

            PlanetOne.rotation += 365 / speedOne;
            PlanetTwo.rotation += 365 / speedTwo;
            PlanetThree.rotation += 365 / speedThree;

            // Venus.rotation += 0.01174;
            // Earth.rotation += 0.01;
            /* //Earth year counter (not currently accurate at all)
	// count++;
  //   if (count % 550 == 0) {
  //       yearsPassed++;
  //       counter.innerHTML = "An estimated " + yearsPassed + " Earth years passed";
  //   }; */
            // Mars.rotation += 0.00802;
            // Jupiter.rotation += 0.00434;
            // Saturn.rotation += 0.00323;
            // Uranus.rotation += 0.00228;
            // Neptune.rotation += 0.00182;

            //Rotate Saturn's rings so that it doesn't look dumb
            // saturnRings.rotation -= 0.01423;
          })
          .play(); // Finally, start the animation loop
      });
    },
    orreryFive: function () {
      // Get planet info
      axios.get("/planets/index/" + this.$route.params.id).then((response) => {
        this.planets = response.data;
        let planet_list = response.data;
        planet_list.sort((a, b) => (a.orbital_distance > b.orbital_distance ? 1 : -1));
        planet_list.sort((a, b) => (a.is_star > b.is_star ? -1 : 1));
        console.log(planet_list);

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
        var sun = two.makeCircle(0, 0, 75);

        var planetOne = two.makeCircle(planet_list[1].orbital_distance * 235, 0, planet_list[1].diameter / 2000);
        var planetOneOrbit = two.makeCircle(0, 0, planet_list[1].orbital_distance * 235);
        planetOneOrbit.noFill();
        planetOneOrbit.linewidth = 2;
        planetOneOrbit.stroke = "#ccc";

        var planetTwo = two.makeCircle(planet_list[2].orbital_distance * 235, 0, planet_list[2].diameter / 2000);
        var planetTwoOrbit = two.makeCircle(0, 0, planet_list[2].orbital_distance * 235);
        planetTwoOrbit.noFill();
        planetTwoOrbit.linewidth = 2;
        planetTwoOrbit.stroke = "#ccc";

        var planetThree = two.makeCircle(planet_list[3].orbital_distance * 235, 0, planet_list[3].diameter / 2000);
        var planetThreeOrbit = two.makeCircle(0, 0, planet_list[3].orbital_distance * 235);
        planetThreeOrbit.noFill();
        planetThreeOrbit.linewidth = 2;
        planetThreeOrbit.stroke = "#ccc";

        var planetFour = two.makeCircle(planet_list[4].orbital_distance * 235, 0, planet_list[4].diameter / 2000);
        var planetFourOrbit = two.makeCircle(0, 0, planet_list[4].orbital_distance * 235);
        planetFourOrbit.noFill();
        planetFourOrbit.linewidth = 2;
        planetFourOrbit.stroke = "#ccc";

        // Hover Over Features

        two.update();

        const styles = {
          family: "Lexend Deca, sans-serif",
        };

        let highlight_1 = function () {
          var central_star = planet_list[0];
          var box = two.makeRectangle(350, 200, 600, 150);
          box.fill = "white";
          box.stroke = "#09C8E2";
          var sun_info = two.makeText(`${central_star.name}`, 350, 175, styles);
          sun_info.size = 75;
          var sunMass = two.makeText(`Mass: ${central_star.mass} x 10^24 Kilos`, 350, 225, styles);
          sunMass.size = 35;
          var sunDiameter = two.makeText(`Diameter: ${central_star.diameter} Kilometers`, 350, 260, styles);
          sunDiameter.size = 35;
          sun.stroke = "#09C8E2";
          sun.linewidth = 3;
          let ignore_1 = function () {
            two.remove(sun_info);
            two.remove(box);
            two.remove(sunDiameter);
            two.remove(sunMass);
            sun.linewidth = 0;
            sun.stroke = "black";
          };
          sun._renderer.elem.addEventListener("mouseout", ignore_1, false);
        };
        sun._renderer.elem.addEventListener("mousemove", highlight_1, false);

        let highlight_2 = function () {
          var box = two.makeRectangle(350, 240, 600, 235);
          box.fill = "white";
          box.stroke = "#09C8E2";
          var planetOneInfo = two.makeText(planet_list[1].name, 350, 175);
          planetOneInfo.size = 75;
          var planetOneDistance = two.makeText(
            `Orbital Distance: ${planet_list[1].orbital_distance} AU`,
            350,
            225,
            styles
          );
          planetOneDistance.size = 35;
          var planetOnePeriod = two.makeText(`Orbital Period: ${planet_list[1].orbital_period} days`, 350, 260, styles);
          planetOnePeriod.size = 35;
          var planetOneDiameter = two.makeText(`Diameter: ${planet_list[1].diameter} Kilometers`, 350, 295, styles);
          planetOneDiameter.size = 35;
          var planetOneMass = two.makeText(`Mass: ${planet_list[1].mass} x 10^24 Kilos`, 350, 330, styles);
          planetOneMass.size = 35;
          planetOneOrbit.stroke = "#09C8E2";
          planetOne.stroke = "#09C8E2";
          planetOne.linewidth = 3;
          let ignore_2 = function () {
            two.remove(planetOneInfo);
            two.remove(box);
            two.remove(planetOneDistance);
            two.remove(planetOnePeriod);
            two.remove(planetOneDiameter);
            two.remove(planetOneMass);
            planetOne.linewidth = 0;
            planetOneOrbit.stroke = "white";
            planetOne.stroke = "black";
          };
          planetOneOrbit._renderer.elem.addEventListener("mouseout", ignore_2, false);
        };
        planetOneOrbit._renderer.elem.addEventListener("mousemove", highlight_2, false);

        let highlight_3 = function () {
          var box = two.makeRectangle(350, 240, 600, 235);
          box.fill = "white";
          box.stroke = "#09C8E2";
          var planetTwoInfo = two.makeText(planet_list[2].name, 350, 175);
          planetTwoInfo.size = 75;
          var planetTwoDistance = two.makeText(
            `Orbital Distance: ${planet_list[2].orbital_distance} AU`,
            350,
            225,
            styles
          );
          planetTwoDistance.size = 35;
          var planetTwoPeriod = two.makeText(`Orbital Period: ${planet_list[2].orbital_period} days`, 350, 260, styles);
          planetTwoPeriod.size = 35;
          var planetTwoDiameter = two.makeText(`Diameter: ${planet_list[2].diameter} Kilometers`, 350, 295, styles);
          planetTwoDiameter.size = 35;
          var planetTwoMass = two.makeText(`Mass: ${planet_list[2].mass} x 10^24 Kilos`, 350, 330, styles);
          planetTwoMass.size = 35;
          planetTwoOrbit.stroke = "#09C8E2";
          planetTwo.stroke = "#09C8E2";
          planetTwo.linewidth = 3;
          let ignore_3 = function () {
            two.remove(planetTwoInfo);
            two.remove(box);
            two.remove(planetTwoDistance);
            two.remove(planetTwoPeriod);
            two.remove(planetTwoDiameter);
            two.remove(planetTwoMass);
            planetTwo.linewidth = 0;
            planetTwoOrbit.stroke = "white";
            planetTwo.stroke = "black";
          };
          planetTwoOrbit._renderer.elem.addEventListener("mouseout", ignore_3, false);
        };
        planetTwoOrbit._renderer.elem.addEventListener("mousemove", highlight_3, false);

        let highlight_4 = function () {
          var box = two.makeRectangle(350, 240, 600, 235);
          box.fill = "white";
          box.stroke = "#09C8E2";
          var planetThreeInfo = two.makeText(planet_list[3].name, 350, 175);
          planetThreeInfo.size = 75;
          var planetThreeDistance = two.makeText(
            `Orbital Distance: ${planet_list[3].orbital_distance} AU`,
            350,
            225,
            styles
          );
          planetThreeDistance.size = 35;
          var planetThreePeriod = two.makeText(
            `Orbital Period: ${planet_list[3].orbital_period} days`,
            350,
            260,
            styles
          );
          planetThreePeriod.size = 35;
          var planetThreeDiameter = two.makeText(`Diameter: ${planet_list[3].diameter} Kilometers`, 350, 295, styles);
          planetThreeDiameter.size = 35;
          var planetThreeMass = two.makeText(`Mass: ${planet_list[3].mass} x 10^24 Kilos`, 350, 330, styles);
          planetThreeMass.size = 35;
          planetThreeOrbit.stroke = "#09C8E2";
          planetThree.stroke = "#09C8E2";
          planetThree.linewidth = 3;
          let ignore_4 = function () {
            two.remove(planetThreeInfo);
            two.remove(box);
            two.remove(planetThreeDistance);
            two.remove(planetThreePeriod);
            two.remove(planetThreeDiameter);
            two.remove(planetThreeMass);
            planetThree.linewidth = 0;
            planetThreeOrbit.stroke = "white";
            planetThree.stroke = "black";
          };
          planetThreeOrbit._renderer.elem.addEventListener("mouseout", ignore_4, false);
        };
        planetThreeOrbit._renderer.elem.addEventListener("mousemove", highlight_4, false);

        let highlight_5 = function () {
          var box = two.makeRectangle(350, 240, 600, 235);
          box.fill = "white";
          box.stroke = "#09C8E2";
          var planetFourInfo = two.makeText(planet_list[4].name, 350, 175);
          planetFourInfo.size = 75;
          var planetFourDistance = two.makeText(
            `Orbital Distance: ${planet_list[4].orbital_distance} AU`,
            350,
            225,
            styles
          );
          planetFourDistance.size = 35;
          var planetFourPeriod = two.makeText(
            `Orbital Period: ${planet_list[4].orbital_period} days`,
            350,
            260,
            styles
          );
          planetFourPeriod.size = 35;
          var planetFourDiameter = two.makeText(`Diameter: ${planet_list[4].diameter} Kilometers`, 350, 295, styles);
          planetFourDiameter.size = 35;
          var planetFourMass = two.makeText(`Mass: ${planet_list[4].mass} x 10^24 Kilos`, 350, 330, styles);
          planetFourMass.size = 35;
          planetFourOrbit.stroke = "#09C8E2";
          planetFour.stroke = "#09C8E2";
          planetFour.linewidth = 3;
          let ignore_5 = function () {
            two.remove(planetFourInfo);
            two.remove(box);
            two.remove(planetFourDistance);
            two.remove(planetFourPeriod);
            two.remove(planetFourDiameter);
            two.remove(planetFourMass);
            planetFour.linewidth = 0;
            planetFourOrbit.stroke = "white";
            planetFour.stroke = "black";
          };
          planetFourOrbit._renderer.elem.addEventListener("mouseout", ignore_5, false);
        };
        planetFourOrbit._renderer.elem.addEventListener("mousemove", highlight_5, false);

        // Stars
        var width = window.innerWidth;
        var height = window.innerHeight;
        var star;
        for (var i = 0; i < 200; i++) {
          var randX = Math.round(Math.random() * width);
          var randY = Math.round(Math.random() * height);
          star = two.makeCircle(randX, randY, 2);
        }

        //Set the color of the planets
        sun.fill = planet_list[0].color;
        planetOne.fill = planet_list[1].color;
        planetTwo.fill = planet_list[2].color;
        planetThree.fill = planet_list[3].color;
        planetFour.fill = planet_list[4].color;

        star.fill = "#FAFAFA";

        //Group the planets
        var PlanetOne = two.makeGroup(planetOne);
        var PlanetTwo = two.makeGroup(planetTwo);
        var PlanetThree = two.makeGroup(planetThree);
        var PlanetFour = two.makeGroup(planetFour);

        var planets = two.makeGroup(
          planetFourOrbit,
          planetThreeOrbit,
          planetTwoOrbit,
          planetOneOrbit,
          sun,
          PlanetOne,
          PlanetTwo,
          PlanetThree,
          PlanetFour
        );

        //Center everything in the center of the element
        planets.translation.set(two.width / 2, two.height / 2);
        // Mercury.rotation = 4;
        PlanetOne.rotation = 3;
        PlanetTwo.rotation = 4;
        PlanetThree.rotation = 5;
        PlanetFour.rotation = 6;

        // Bind a function to scale and rotate the group to the animation loop.
        two
          .bind("update", function () {
            //Set the "ZOOM" of the system
            planets.scale = 0.8;

            //Rotate all the planets
            // Mercury.rotation += 88 / 36500;
            var speedOne = planet_list[1].orbital_period * 100;
            var speedTwo = planet_list[2].orbital_period * 100;
            var speedThree = planet_list[3].orbital_period * 100;
            var speedFour = planet_list[4].orbital_period * 100;

            PlanetOne.rotation += 365 / speedOne;
            PlanetTwo.rotation += 365 / speedTwo;
            PlanetThree.rotation += 365 / speedThree;
            PlanetFour.rotation += 365 / speedFour;
          })
          .play(); // Finally, start the animation loop
      });
    },
    orrerySix: function () {
      // Get planet info
      axios.get("/planets/index/" + this.$route.params.id).then((response) => {
        this.planets = response.data;
        let planet_list = response.data;
        planet_list.sort((a, b) => (a.orbital_distance > b.orbital_distance ? 1 : -1));
        planet_list.sort((a, b) => (a.is_star > b.is_star ? -1 : 1));
        console.log(planet_list);

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
        var sun = two.makeCircle(0, 0, 75);

        var planetOne = two.makeCircle(planet_list[1].orbital_distance * 235, 0, planet_list[1].diameter / 2000);
        var planetOneOrbit = two.makeCircle(0, 0, planet_list[1].orbital_distance * 235);
        planetOneOrbit.noFill();
        planetOneOrbit.linewidth = 2;
        planetOneOrbit.stroke = "#ccc";

        var planetTwo = two.makeCircle(planet_list[2].orbital_distance * 235, 0, planet_list[2].diameter / 2000);
        var planetTwoOrbit = two.makeCircle(0, 0, planet_list[2].orbital_distance * 235);
        planetTwoOrbit.noFill();
        planetTwoOrbit.linewidth = 2;
        planetTwoOrbit.stroke = "#ccc";

        var planetThree = two.makeCircle(planet_list[3].orbital_distance * 235, 0, planet_list[3].diameter / 2000);
        var planetThreeOrbit = two.makeCircle(0, 0, planet_list[3].orbital_distance * 235);
        planetThreeOrbit.noFill();
        planetThreeOrbit.linewidth = 2;
        planetThreeOrbit.stroke = "#ccc";

        var planetFour = two.makeCircle(planet_list[4].orbital_distance * 235, 0, planet_list[4].diameter / 2000);
        var planetFourOrbit = two.makeCircle(0, 0, planet_list[4].orbital_distance * 235);
        planetFourOrbit.noFill();
        planetFourOrbit.linewidth = 2;
        planetFourOrbit.stroke = "#ccc";

        var planetFive = two.makeCircle(planet_list[5].orbital_distance * 235, 0, planet_list[5].diameter / 2000);
        var planetFiveOrbit = two.makeCircle(0, 0, planet_list[5].orbital_distance * 235);
        planetFiveOrbit.noFill();
        planetFiveOrbit.linewidth = 2;
        planetFiveOrbit.stroke = "#ccc";

        // Hover Over Features

        two.update();

        const styles = {
          family: "Lexend Deca, sans-serif",
        };

        let highlight_1 = function () {
          var central_star = planet_list[0];
          var box = two.makeRectangle(350, 200, 600, 150);
          box.fill = "white";
          box.stroke = "#09C8E2";
          var sun_info = two.makeText(`${central_star.name}`, 350, 175, styles);
          sun_info.size = 75;
          var sunMass = two.makeText(`Mass: ${central_star.mass} x 10^24 Kilos`, 350, 225, styles);
          sunMass.size = 35;
          var sunDiameter = two.makeText(`Diameter: ${central_star.diameter} Kilometers`, 350, 260, styles);
          sunDiameter.size = 35;
          sun.stroke = "#09C8E2";
          sun.linewidth = 3;
          let ignore_1 = function () {
            two.remove(sun_info);
            two.remove(box);
            two.remove(sunDiameter);
            two.remove(sunMass);
            sun.linewidth = 0;
            sun.stroke = "black";
          };
          sun._renderer.elem.addEventListener("mouseout", ignore_1, false);
        };
        sun._renderer.elem.addEventListener("mousemove", highlight_1, false);

        let highlight_2 = function () {
          var box = two.makeRectangle(350, 240, 600, 235);
          box.fill = "white";
          box.stroke = "#09C8E2";
          var planetOneInfo = two.makeText(planet_list[1].name, 350, 175);
          planetOneInfo.size = 75;
          var planetOneDistance = two.makeText(
            `Orbital Distance: ${planet_list[1].orbital_distance} AU`,
            350,
            225,
            styles
          );
          planetOneDistance.size = 35;
          var planetOnePeriod = two.makeText(`Orbital Period: ${planet_list[1].orbital_period} days`, 350, 260, styles);
          planetOnePeriod.size = 35;
          var planetOneDiameter = two.makeText(`Diameter: ${planet_list[1].diameter} Kilometers`, 350, 295, styles);
          planetOneDiameter.size = 35;
          var planetOneMass = two.makeText(`Mass: ${planet_list[1].mass} x 10^24 Kilos`, 350, 330, styles);
          planetOneMass.size = 35;
          planetOneOrbit.stroke = "#09C8E2";
          planetOne.stroke = "#09C8E2";
          planetOne.linewidth = 3;
          let ignore_2 = function () {
            two.remove(planetOneInfo);
            two.remove(box);
            two.remove(planetOneDistance);
            two.remove(planetOnePeriod);
            two.remove(planetOneDiameter);
            two.remove(planetOneMass);
            planetOne.linewidth = 0;
            planetOneOrbit.stroke = "white";
            planetOne.stroke = "black";
          };
          planetOneOrbit._renderer.elem.addEventListener("mouseout", ignore_2, false);
        };
        planetOneOrbit._renderer.elem.addEventListener("mousemove", highlight_2, false);

        let highlight_3 = function () {
          var box = two.makeRectangle(350, 240, 600, 235);
          box.fill = "white";
          box.stroke = "#09C8E2";
          var planetTwoInfo = two.makeText(planet_list[2].name, 350, 175);
          planetTwoInfo.size = 75;
          var planetTwoDistance = two.makeText(
            `Orbital Distance: ${planet_list[2].orbital_distance} AU`,
            350,
            225,
            styles
          );
          planetTwoDistance.size = 35;
          var planetTwoPeriod = two.makeText(`Orbital Period: ${planet_list[2].orbital_period} days`, 350, 260, styles);
          planetTwoPeriod.size = 35;
          var planetTwoDiameter = two.makeText(`Diameter: ${planet_list[2].diameter} Kilometers`, 350, 295, styles);
          planetTwoDiameter.size = 35;
          var planetTwoMass = two.makeText(`Mass: ${planet_list[2].mass} x 10^24 Kilos`, 350, 330, styles);
          planetTwoMass.size = 35;
          planetTwoOrbit.stroke = "#09C8E2";
          planetTwo.stroke = "#09C8E2";
          planetTwo.linewidth = 3;
          let ignore_3 = function () {
            two.remove(planetTwoInfo);
            two.remove(box);
            two.remove(planetTwoDistance);
            two.remove(planetTwoPeriod);
            two.remove(planetTwoDiameter);
            two.remove(planetTwoMass);
            planetTwo.linewidth = 0;
            planetTwoOrbit.stroke = "white";
            planetTwo.stroke = "black";
          };
          planetTwoOrbit._renderer.elem.addEventListener("mouseout", ignore_3, false);
        };
        planetTwoOrbit._renderer.elem.addEventListener("mousemove", highlight_3, false);

        let highlight_4 = function () {
          var box = two.makeRectangle(350, 240, 600, 235);
          box.fill = "white";
          box.stroke = "#09C8E2";
          var planetThreeInfo = two.makeText(planet_list[3].name, 350, 175);
          planetThreeInfo.size = 75;
          var planetThreeDistance = two.makeText(
            `Orbital Distance: ${planet_list[3].orbital_distance} AU`,
            350,
            225,
            styles
          );
          planetThreeDistance.size = 35;
          var planetThreePeriod = two.makeText(
            `Orbital Period: ${planet_list[3].orbital_period} days`,
            350,
            260,
            styles
          );
          planetThreePeriod.size = 35;
          var planetThreeDiameter = two.makeText(`Diameter: ${planet_list[3].diameter} Kilometers`, 350, 295, styles);
          planetThreeDiameter.size = 35;
          var planetThreeMass = two.makeText(`Mass: ${planet_list[3].mass} x 10^24 Kilos`, 350, 330, styles);
          planetThreeMass.size = 35;
          planetThreeOrbit.stroke = "#09C8E2";
          planetThree.stroke = "#09C8E2";
          planetThree.linewidth = 3;
          let ignore_4 = function () {
            two.remove(planetThreeInfo);
            two.remove(box);
            two.remove(planetThreeDistance);
            two.remove(planetThreePeriod);
            two.remove(planetThreeDiameter);
            two.remove(planetThreeMass);
            planetThree.linewidth = 0;
            planetThreeOrbit.stroke = "white";
            planetThree.stroke = "black";
          };
          planetThreeOrbit._renderer.elem.addEventListener("mouseout", ignore_4, false);
        };
        planetThreeOrbit._renderer.elem.addEventListener("mousemove", highlight_4, false);

        let highlight_5 = function () {
          var box = two.makeRectangle(350, 240, 600, 235);
          box.fill = "white";
          box.stroke = "#09C8E2";
          var planetFourInfo = two.makeText(planet_list[4].name, 350, 175);
          planetFourInfo.size = 75;
          var planetFourDistance = two.makeText(
            `Orbital Distance: ${planet_list[4].orbital_distance} AU`,
            350,
            225,
            styles
          );
          planetFourDistance.size = 35;
          var planetFourPeriod = two.makeText(
            `Orbital Period: ${planet_list[4].orbital_period} days`,
            350,
            260,
            styles
          );
          planetFourPeriod.size = 35;
          var planetFourDiameter = two.makeText(`Diameter: ${planet_list[4].diameter} Kilometers`, 350, 295, styles);
          planetFourDiameter.size = 35;
          var planetFourMass = two.makeText(`Mass: ${planet_list[4].mass} x 10^24 Kilos`, 350, 330, styles);
          planetFourMass.size = 35;
          planetFourOrbit.stroke = "#09C8E2";
          planetFour.stroke = "#09C8E2";
          planetFour.linewidth = 3;
          let ignore_5 = function () {
            two.remove(planetFourInfo);
            two.remove(box);
            two.remove(planetFourDistance);
            two.remove(planetFourPeriod);
            two.remove(planetFourDiameter);
            two.remove(planetFourMass);
            planetFour.linewidth = 0;
            planetFourOrbit.stroke = "white";
            planetFour.stroke = "black";
          };
          planetFourOrbit._renderer.elem.addEventListener("mouseout", ignore_5, false);
        };
        planetFourOrbit._renderer.elem.addEventListener("mousemove", highlight_5, false);

        let highlight_6 = function () {
          var box = two.makeRectangle(350, 240, 600, 235);
          box.fill = "white";
          box.stroke = "#09C8E2";
          var planetFiveInfo = two.makeText(planet_list[5].name, 350, 175);
          planetFiveInfo.size = 75;
          var planetFiveDistance = two.makeText(
            `Orbital Distance: ${planet_list[5].orbital_distance} AU`,
            350,
            225,
            styles
          );
          planetFiveDistance.size = 35;
          var planetFivePeriod = two.makeText(
            `Orbital Period: ${planet_list[5].orbital_period} days`,
            350,
            260,
            styles
          );
          planetFivePeriod.size = 35;
          var planetFiveDiameter = two.makeText(`Diameter: ${planet_list[5].diameter} Kilometers`, 350, 295, styles);
          planetFiveDiameter.size = 35;
          var planetFiveMass = two.makeText(`Mass: ${planet_list[5].mass} x 10^24 Kilos`, 350, 330, styles);
          planetFiveMass.size = 35;
          planetFiveOrbit.stroke = "#09C8E2";
          planetFive.stroke = "#09C8E2";
          planetFive.linewidth = 3;
          let ignore_6 = function () {
            two.remove(planetFiveInfo);
            two.remove(box);
            two.remove(planetFiveDistance);
            two.remove(planetFivePeriod);
            two.remove(planetFiveDiameter);
            two.remove(planetFiveMass);
            planetFive.linewidth = 0;
            planetFiveOrbit.stroke = "white";
            planetFive.stroke = "black";
          };
          planetFiveOrbit._renderer.elem.addEventListener("mouseout", ignore_6, false);
        };
        planetFiveOrbit._renderer.elem.addEventListener("mousemove", highlight_6, false);

        // Stars
        var width = window.innerWidth;
        var height = window.innerHeight;
        var star;
        for (var i = 0; i < 200; i++) {
          var randX = Math.round(Math.random() * width);
          var randY = Math.round(Math.random() * height);
          star = two.makeCircle(randX, randY, 2);
        }

        //Set the color of the planets
        sun.fill = planet_list[0].color;
        planetOne.fill = planet_list[1].color;
        planetTwo.fill = planet_list[2].color;
        planetThree.fill = planet_list[3].color;
        planetFour.fill = planet_list[4].color;
        planetFive.fill = planet_list[5].color;

        star.fill = "#FAFAFA";

        //Group the planets
        var PlanetOne = two.makeGroup(planetOne);
        var PlanetTwo = two.makeGroup(planetTwo);
        var PlanetThree = two.makeGroup(planetThree);
        var PlanetFour = two.makeGroup(planetFour);
        var PlanetFive = two.makeGroup(planetFive);

        var planets = two.makeGroup(
          planetFiveOrbit,
          planetFourOrbit,
          planetThreeOrbit,
          planetTwoOrbit,
          planetOneOrbit,
          sun,
          PlanetOne,
          PlanetTwo,
          PlanetThree,
          PlanetFour,
          PlanetFive
        );

        //Center everything in the center of the element
        planets.translation.set(two.width / 2, two.height / 2);
        // Mercury.rotation = 4;
        PlanetOne.rotation = 3;
        PlanetTwo.rotation = 4;
        PlanetThree.rotation = 5;
        PlanetFour.rotation = 6;
        PlanetFive.rotation = 7;

        // Bind a function to scale and rotate the group to the animation loop.
        two
          .bind("update", function () {
            //Set the "ZOOM" of the system
            planets.scale = 0.8;

            //Rotate all the planets
            // Mercury.rotation += 88 / 36500;
            var speedOne = planet_list[1].orbital_period * 100;
            var speedTwo = planet_list[2].orbital_period * 100;
            var speedThree = planet_list[3].orbital_period * 100;
            var speedFour = planet_list[4].orbital_period * 100;
            var speedFive = planet_list[5].orbital_period * 100;

            PlanetOne.rotation += 365 / speedOne;
            PlanetTwo.rotation += 365 / speedTwo;
            PlanetThree.rotation += 365 / speedThree;
            PlanetFour.rotation += 365 / speedFour;
            PlanetFive.rotation += 365 / speedFive;
          })
          .play(); // Finally, start the animation loop
      });
    },
    orrerySeven: function () {
      // Get planet info
      axios.get("/planets/index/" + this.$route.params.id).then((response) => {
        this.planets = response.data;
        let planet_list = response.data;
        planet_list.sort((a, b) => (a.orbital_distance > b.orbital_distance ? 1 : -1));
        planet_list.sort((a, b) => (a.is_star > b.is_star ? -1 : 1));
        console.log(planet_list);

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
        var sun = two.makeCircle(0, 0, 75);

        var planetOne = two.makeCircle(planet_list[1].orbital_distance * 235, 0, planet_list[1].diameter / 2000);
        var planetOneOrbit = two.makeCircle(0, 0, planet_list[1].orbital_distance * 235);
        planetOneOrbit.noFill();
        planetOneOrbit.linewidth = 2;
        planetOneOrbit.stroke = "#ccc";

        var planetTwo = two.makeCircle(planet_list[2].orbital_distance * 235, 0, planet_list[2].diameter / 2000);
        var planetTwoOrbit = two.makeCircle(0, 0, planet_list[2].orbital_distance * 235);
        planetTwoOrbit.noFill();
        planetTwoOrbit.linewidth = 2;
        planetTwoOrbit.stroke = "#ccc";

        var planetThree = two.makeCircle(planet_list[3].orbital_distance * 235, 0, planet_list[3].diameter / 2000);
        var planetThreeOrbit = two.makeCircle(0, 0, planet_list[3].orbital_distance * 235);
        planetThreeOrbit.noFill();
        planetThreeOrbit.linewidth = 2;
        planetThreeOrbit.stroke = "#ccc";

        var planetFour = two.makeCircle(planet_list[4].orbital_distance * 235, 0, planet_list[4].diameter / 2000);
        var planetFourOrbit = two.makeCircle(0, 0, planet_list[4].orbital_distance * 235);
        planetFourOrbit.noFill();
        planetFourOrbit.linewidth = 2;
        planetFourOrbit.stroke = "#ccc";

        var planetFive = two.makeCircle(planet_list[5].orbital_distance * 235, 0, planet_list[5].diameter / 2000);
        var planetFiveOrbit = two.makeCircle(0, 0, planet_list[5].orbital_distance * 235);
        planetFiveOrbit.noFill();
        planetFiveOrbit.linewidth = 2;
        planetFiveOrbit.stroke = "#ccc";

        var planetSix = two.makeCircle(planet_list[6].orbital_distance * 235, 0, planet_list[6].diameter / 2000);
        var planetSixOrbit = two.makeCircle(0, 0, planet_list[6].orbital_distance * 235);
        planetSixOrbit.noFill();
        planetSixOrbit.linewidth = 2;
        planetSixOrbit.stroke = "#ccc";

        // Hover Over Features

        two.update();

        const styles = {
          family: "Lexend Deca, sans-serif",
        };

        let highlight_1 = function () {
          var central_star = planet_list[0];
          var box = two.makeRectangle(350, 200, 600, 150);
          box.fill = "white";
          box.stroke = "#09C8E2";
          var sun_info = two.makeText(`${central_star.name}`, 350, 175, styles);
          sun_info.size = 75;
          var sunMass = two.makeText(`Mass: ${central_star.mass} x 10^24 Kilos`, 350, 225, styles);
          sunMass.size = 35;
          var sunDiameter = two.makeText(`Diameter: ${central_star.diameter} Kilometers`, 350, 260, styles);
          sunDiameter.size = 35;
          sun.stroke = "#09C8E2";
          sun.linewidth = 3;
          let ignore_1 = function () {
            two.remove(sun_info);
            two.remove(box);
            two.remove(sunDiameter);
            two.remove(sunMass);
            sun.linewidth = 0;
            sun.stroke = "black";
          };
          sun._renderer.elem.addEventListener("mouseout", ignore_1, false);
        };
        sun._renderer.elem.addEventListener("mousemove", highlight_1, false);

        let highlight_2 = function () {
          var box = two.makeRectangle(350, 240, 600, 235);
          box.fill = "white";
          box.stroke = "#09C8E2";
          var planetOneInfo = two.makeText(planet_list[1].name, 350, 175);
          planetOneInfo.size = 75;
          var planetOneDistance = two.makeText(
            `Orbital Distance: ${planet_list[1].orbital_distance} AU`,
            350,
            225,
            styles
          );
          planetOneDistance.size = 35;
          var planetOnePeriod = two.makeText(`Orbital Period: ${planet_list[1].orbital_period} days`, 350, 260, styles);
          planetOnePeriod.size = 35;
          var planetOneDiameter = two.makeText(`Diameter: ${planet_list[1].diameter} Kilometers`, 350, 295, styles);
          planetOneDiameter.size = 35;
          var planetOneMass = two.makeText(`Mass: ${planet_list[1].mass} x 10^24 Kilos`, 350, 330, styles);
          planetOneMass.size = 35;
          planetOneOrbit.stroke = "#09C8E2";
          planetOne.stroke = "#09C8E2";
          planetOne.linewidth = 3;
          let ignore_2 = function () {
            two.remove(planetOneInfo);
            two.remove(box);
            two.remove(planetOneDistance);
            two.remove(planetOnePeriod);
            two.remove(planetOneDiameter);
            two.remove(planetOneMass);
            planetOne.linewidth = 0;
            planetOneOrbit.stroke = "white";
            planetOne.stroke = "black";
          };
          planetOneOrbit._renderer.elem.addEventListener("mouseout", ignore_2, false);
        };
        planetOneOrbit._renderer.elem.addEventListener("mousemove", highlight_2, false);

        let highlight_3 = function () {
          var box = two.makeRectangle(350, 240, 600, 235);
          box.fill = "white";
          box.stroke = "#09C8E2";
          var planetTwoInfo = two.makeText(planet_list[2].name, 350, 175);
          planetTwoInfo.size = 75;
          var planetTwoDistance = two.makeText(
            `Orbital Distance: ${planet_list[2].orbital_distance} AU`,
            350,
            225,
            styles
          );
          planetTwoDistance.size = 35;
          var planetTwoPeriod = two.makeText(`Orbital Period: ${planet_list[2].orbital_period} days`, 350, 260, styles);
          planetTwoPeriod.size = 35;
          var planetTwoDiameter = two.makeText(`Diameter: ${planet_list[2].diameter} Kilometers`, 350, 295, styles);
          planetTwoDiameter.size = 35;
          var planetTwoMass = two.makeText(`Mass: ${planet_list[2].mass} x 10^24 Kilos`, 350, 330, styles);
          planetTwoMass.size = 35;
          planetTwoOrbit.stroke = "#09C8E2";
          planetTwo.stroke = "#09C8E2";
          planetTwo.linewidth = 3;
          let ignore_3 = function () {
            two.remove(planetTwoInfo);
            two.remove(box);
            two.remove(planetTwoDistance);
            two.remove(planetTwoPeriod);
            two.remove(planetTwoDiameter);
            two.remove(planetTwoMass);
            planetTwo.linewidth = 0;
            planetTwoOrbit.stroke = "white";
            planetTwo.stroke = "black";
          };
          planetTwoOrbit._renderer.elem.addEventListener("mouseout", ignore_3, false);
        };
        planetTwoOrbit._renderer.elem.addEventListener("mousemove", highlight_3, false);

        let highlight_4 = function () {
          var box = two.makeRectangle(350, 240, 600, 235);
          box.fill = "white";
          box.stroke = "#09C8E2";
          var planetThreeInfo = two.makeText(planet_list[3].name, 350, 175);
          planetThreeInfo.size = 75;
          var planetThreeDistance = two.makeText(
            `Orbital Distance: ${planet_list[3].orbital_distance} AU`,
            350,
            225,
            styles
          );
          planetThreeDistance.size = 35;
          var planetThreePeriod = two.makeText(
            `Orbital Period: ${planet_list[3].orbital_period} days`,
            350,
            260,
            styles
          );
          planetThreePeriod.size = 35;
          var planetThreeDiameter = two.makeText(`Diameter: ${planet_list[3].diameter} Kilometers`, 350, 295, styles);
          planetThreeDiameter.size = 35;
          var planetThreeMass = two.makeText(`Mass: ${planet_list[3].mass} x 10^24 Kilos`, 350, 330, styles);
          planetThreeMass.size = 35;
          planetThreeOrbit.stroke = "#09C8E2";
          planetThree.stroke = "#09C8E2";
          planetThree.linewidth = 3;
          let ignore_4 = function () {
            two.remove(planetThreeInfo);
            two.remove(box);
            two.remove(planetThreeDistance);
            two.remove(planetThreePeriod);
            two.remove(planetThreeDiameter);
            two.remove(planetThreeMass);
            planetThree.linewidth = 0;
            planetThreeOrbit.stroke = "white";
            planetThree.stroke = "black";
          };
          planetThreeOrbit._renderer.elem.addEventListener("mouseout", ignore_4, false);
        };
        planetThreeOrbit._renderer.elem.addEventListener("mousemove", highlight_4, false);

        let highlight_5 = function () {
          var box = two.makeRectangle(350, 240, 600, 235);
          box.fill = "white";
          box.stroke = "#09C8E2";
          var planetFourInfo = two.makeText(planet_list[4].name, 350, 175);
          planetFourInfo.size = 75;
          var planetFourDistance = two.makeText(
            `Orbital Distance: ${planet_list[4].orbital_distance} AU`,
            350,
            225,
            styles
          );
          planetFourDistance.size = 35;
          var planetFourPeriod = two.makeText(
            `Orbital Period: ${planet_list[4].orbital_period} days`,
            350,
            260,
            styles
          );
          planetFourPeriod.size = 35;
          var planetFourDiameter = two.makeText(`Diameter: ${planet_list[4].diameter} Kilometers`, 350, 295, styles);
          planetFourDiameter.size = 35;
          var planetFourMass = two.makeText(`Mass: ${planet_list[4].mass} x 10^24 Kilos`, 350, 330, styles);
          planetFourMass.size = 35;
          planetFourOrbit.stroke = "#09C8E2";
          planetFour.stroke = "#09C8E2";
          planetFour.linewidth = 3;
          let ignore_5 = function () {
            two.remove(planetFourInfo);
            two.remove(box);
            two.remove(planetFourDistance);
            two.remove(planetFourPeriod);
            two.remove(planetFourDiameter);
            two.remove(planetFourMass);
            planetFour.linewidth = 0;
            planetFourOrbit.stroke = "white";
            planetFour.stroke = "black";
          };
          planetFourOrbit._renderer.elem.addEventListener("mouseout", ignore_5, false);
        };
        planetFourOrbit._renderer.elem.addEventListener("mousemove", highlight_5, false);

        let highlight_6 = function () {
          var box = two.makeRectangle(350, 240, 600, 235);
          box.fill = "white";
          box.stroke = "#09C8E2";
          var planetFiveInfo = two.makeText(planet_list[5].name, 350, 175);
          planetFiveInfo.size = 75;
          var planetFiveDistance = two.makeText(
            `Orbital Distance: ${planet_list[5].orbital_distance} AU`,
            350,
            225,
            styles
          );
          planetFiveDistance.size = 35;
          var planetFivePeriod = two.makeText(
            `Orbital Period: ${planet_list[5].orbital_period} days`,
            350,
            260,
            styles
          );
          planetFivePeriod.size = 35;
          var planetFiveDiameter = two.makeText(`Diameter: ${planet_list[5].diameter} Kilometers`, 350, 295, styles);
          planetFiveDiameter.size = 35;
          var planetFiveMass = two.makeText(`Mass: ${planet_list[5].mass} x 10^24 Kilos`, 350, 330, styles);
          planetFiveMass.size = 35;
          planetFiveOrbit.stroke = "#09C8E2";
          planetFive.stroke = "#09C8E2";
          planetFive.linewidth = 3;
          let ignore_6 = function () {
            two.remove(planetFiveInfo);
            two.remove(box);
            two.remove(planetFiveDistance);
            two.remove(planetFivePeriod);
            two.remove(planetFiveDiameter);
            two.remove(planetFiveMass);
            planetFive.linewidth = 0;
            planetFiveOrbit.stroke = "white";
            planetFive.stroke = "black";
          };
          planetFiveOrbit._renderer.elem.addEventListener("mouseout", ignore_6, false);
        };
        planetFiveOrbit._renderer.elem.addEventListener("mousemove", highlight_6, false);

        let highlight_7 = function () {
          var box = two.makeRectangle(350, 240, 600, 235);
          box.fill = "white";
          box.stroke = "#09C8E2";
          var planetSixInfo = two.makeText(planet_list[6].name, 350, 175);
          planetSixInfo.size = 75;
          var planetSixDistance = two.makeText(
            `Orbital Distance: ${planet_list[6].orbital_distance} AU`,
            350,
            225,
            styles
          );
          planetSixDistance.size = 35;
          var planetSixPeriod = two.makeText(`Orbital Period: ${planet_list[6].orbital_period} days`, 350, 260, styles);
          planetSixPeriod.size = 35;
          var planetSixDiameter = two.makeText(`Diameter: ${planet_list[6].diameter} Kilometers`, 350, 295, styles);
          planetSixDiameter.size = 35;
          var planetSixMass = two.makeText(`Mass: ${planet_list[6].mass} x 10^24 Kilos`, 350, 330, styles);
          planetSixMass.size = 35;
          planetSixOrbit.stroke = "#09C8E2";
          planetSix.stroke = "#09C8E2";
          planetSix.linewidth = 3;
          let ignore_7 = function () {
            two.remove(planetSixInfo);
            two.remove(box);
            two.remove(planetSixDistance);
            two.remove(planetSixPeriod);
            two.remove(planetSixDiameter);
            two.remove(planetSixMass);
            planetSix.linewidth = 0;
            planetSixOrbit.stroke = "white";
            planetSix.stroke = "black";
          };
          planetSixOrbit._renderer.elem.addEventListener("mouseout", ignore_7, false);
        };
        planetSixOrbit._renderer.elem.addEventListener("mousemove", highlight_7, false);

        // Stars
        var width = window.innerWidth;
        var height = window.innerHeight;
        var star;
        for (var i = 0; i < 200; i++) {
          var randX = Math.round(Math.random() * width);
          var randY = Math.round(Math.random() * height);
          star = two.makeCircle(randX, randY, 2);
        }

        //Set the color of the planets
        sun.fill = planet_list[0].color;
        planetOne.fill = planet_list[1].color;
        planetTwo.fill = planet_list[2].color;
        planetThree.fill = planet_list[3].color;
        planetFour.fill = planet_list[4].color;
        planetFive.fill = planet_list[5].color;
        planetSix.fill = planet_list[6].color;

        star.fill = "#FAFAFA";

        //Group the planets
        var PlanetOne = two.makeGroup(planetOne);
        var PlanetTwo = two.makeGroup(planetTwo);
        var PlanetThree = two.makeGroup(planetThree);
        var PlanetFour = two.makeGroup(planetFour);
        var PlanetFive = two.makeGroup(planetFive);
        var PlanetSix = two.makeGroup(planetSix);

        var planets = two.makeGroup(
          planetSixOrbit,
          planetFiveOrbit,
          planetFourOrbit,
          planetThreeOrbit,
          planetTwoOrbit,
          planetOneOrbit,
          sun,
          PlanetOne,
          PlanetTwo,
          PlanetThree,
          PlanetFour,
          PlanetFive,
          PlanetSix
        );

        //Center everything in the center of the element
        planets.translation.set(two.width / 2, two.height / 2);
        // Mercury.rotation = 4;
        PlanetOne.rotation = 3;
        PlanetTwo.rotation = 4;
        PlanetThree.rotation = 5;
        PlanetFour.rotation = 6;
        PlanetFive.rotation = 7;
        PlanetSix.rotation = 8;

        // Bind a function to scale and rotate the group to the animation loop.
        two
          .bind("update", function () {
            //Set the "ZOOM" of the system
            planets.scale = 0.8;

            //Rotate all the planets
            // Mercury.rotation += 88 / 36500;
            var speedOne = planet_list[1].orbital_period * 100;
            var speedTwo = planet_list[2].orbital_period * 100;
            var speedThree = planet_list[3].orbital_period * 100;
            var speedFour = planet_list[4].orbital_period * 100;
            var speedFive = planet_list[5].orbital_period * 100;
            var speedSix = planet_list[6].orbital_period * 100;

            PlanetOne.rotation += 365 / speedOne;
            PlanetTwo.rotation += 365 / speedTwo;
            PlanetThree.rotation += 365 / speedThree;
            PlanetFour.rotation += 365 / speedFour;
            PlanetFive.rotation += 365 / speedFive;
            PlanetSix.rotation += 365 / speedSix;
          })
          .play(); // Finally, start the animation loop
      });
    },
    orreryEight: function () {
      // Get planet info
      axios.get("/planets/index/" + this.$route.params.id).then((response) => {
        this.planets = response.data;
        let planet_list = response.data;
        planet_list.sort((a, b) => (a.orbital_distance > b.orbital_distance ? 1 : -1));
        planet_list.sort((a, b) => (a.is_star > b.is_star ? -1 : 1));
        console.log(planet_list);

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
        var sun = two.makeCircle(0, 0, 75);

        var planetOne = two.makeCircle(planet_list[1].orbital_distance * 235, 0, planet_list[1].diameter / 2000);
        var planetOneOrbit = two.makeCircle(0, 0, planet_list[1].orbital_distance * 235);
        planetOneOrbit.noFill();
        planetOneOrbit.linewidth = 2;
        planetOneOrbit.stroke = "#ccc";

        var planetTwo = two.makeCircle(planet_list[2].orbital_distance * 235, 0, planet_list[2].diameter / 2000);
        var planetTwoOrbit = two.makeCircle(0, 0, planet_list[2].orbital_distance * 235);
        planetTwoOrbit.noFill();
        planetTwoOrbit.linewidth = 2;
        planetTwoOrbit.stroke = "#ccc";

        var planetThree = two.makeCircle(planet_list[3].orbital_distance * 235, 0, planet_list[3].diameter / 2000);
        var planetThreeOrbit = two.makeCircle(0, 0, planet_list[3].orbital_distance * 235);
        planetThreeOrbit.noFill();
        planetThreeOrbit.linewidth = 2;
        planetThreeOrbit.stroke = "#ccc";

        var planetFour = two.makeCircle(planet_list[4].orbital_distance * 235, 0, planet_list[4].diameter / 2000);
        var planetFourOrbit = two.makeCircle(0, 0, planet_list[4].orbital_distance * 235);
        planetFourOrbit.noFill();
        planetFourOrbit.linewidth = 2;
        planetFourOrbit.stroke = "#ccc";

        var planetFive = two.makeCircle(planet_list[5].orbital_distance * 235, 0, planet_list[5].diameter / 2000);
        var planetFiveOrbit = two.makeCircle(0, 0, planet_list[5].orbital_distance * 235);
        planetFiveOrbit.noFill();
        planetFiveOrbit.linewidth = 2;
        planetFiveOrbit.stroke = "#ccc";

        var planetSix = two.makeCircle(planet_list[6].orbital_distance * 235, 0, planet_list[6].diameter / 2000);
        var planetSixOrbit = two.makeCircle(0, 0, planet_list[6].orbital_distance * 235);
        planetSixOrbit.noFill();
        planetSixOrbit.linewidth = 2;
        planetSixOrbit.stroke = "#ccc";

        var planetSeven = two.makeCircle(planet_list[7].orbital_distance * 235, 0, planet_list[7].diameter / 2000);
        var planetSevenOrbit = two.makeCircle(0, 0, planet_list[7].orbital_distance * 235);
        planetSevenOrbit.noFill();
        planetSevenOrbit.linewidth = 2;
        planetSevenOrbit.stroke = "#ccc";

        // Hover Over Features

        two.update();

        const styles = {
          family: "Lexend Deca, sans-serif",
        };

        let highlight_1 = function () {
          var central_star = planet_list[0];
          var box = two.makeRectangle(350, 200, 600, 150);
          box.fill = "white";
          box.stroke = "#09C8E2";
          var sun_info = two.makeText(`${central_star.name}`, 350, 175, styles);
          sun_info.size = 75;
          var sunMass = two.makeText(`Mass: ${central_star.mass} x 10^24 Kilos`, 350, 225, styles);
          sunMass.size = 35;
          var sunDiameter = two.makeText(`Diameter: ${central_star.diameter} Kilometers`, 350, 260, styles);
          sunDiameter.size = 35;
          sun.stroke = "#09C8E2";
          sun.linewidth = 3;
          let ignore_1 = function () {
            two.remove(sun_info);
            two.remove(box);
            two.remove(sunDiameter);
            two.remove(sunMass);
            sun.linewidth = 0;
            sun.stroke = "black";
          };
          sun._renderer.elem.addEventListener("mouseout", ignore_1, false);
        };
        sun._renderer.elem.addEventListener("mousemove", highlight_1, false);

        let highlight_2 = function () {
          var box = two.makeRectangle(350, 240, 600, 235);
          box.fill = "white";
          box.stroke = "#09C8E2";
          var planetOneInfo = two.makeText(planet_list[1].name, 350, 175);
          planetOneInfo.size = 75;
          var planetOneDistance = two.makeText(
            `Orbital Distance: ${planet_list[1].orbital_distance} AU`,
            350,
            225,
            styles
          );
          planetOneDistance.size = 35;
          var planetOnePeriod = two.makeText(`Orbital Period: ${planet_list[1].orbital_period} days`, 350, 260, styles);
          planetOnePeriod.size = 35;
          var planetOneDiameter = two.makeText(`Diameter: ${planet_list[1].diameter} Kilometers`, 350, 295, styles);
          planetOneDiameter.size = 35;
          var planetOneMass = two.makeText(`Mass: ${planet_list[1].mass} x 10^24 Kilos`, 350, 330, styles);
          planetOneMass.size = 35;
          planetOneOrbit.stroke = "#09C8E2";
          planetOne.stroke = "#09C8E2";
          planetOne.linewidth = 3;
          let ignore_2 = function () {
            two.remove(planetOneInfo);
            two.remove(box);
            two.remove(planetOneDistance);
            two.remove(planetOnePeriod);
            two.remove(planetOneDiameter);
            two.remove(planetOneMass);
            planetOne.linewidth = 0;
            planetOneOrbit.stroke = "white";
            planetOne.stroke = "black";
          };
          planetOneOrbit._renderer.elem.addEventListener("mouseout", ignore_2, false);
        };
        planetOneOrbit._renderer.elem.addEventListener("mousemove", highlight_2, false);

        let highlight_3 = function () {
          var box = two.makeRectangle(350, 240, 600, 235);
          box.fill = "white";
          box.stroke = "#09C8E2";
          var planetTwoInfo = two.makeText(planet_list[2].name, 350, 175);
          planetTwoInfo.size = 75;
          var planetTwoDistance = two.makeText(
            `Orbital Distance: ${planet_list[2].orbital_distance} AU`,
            350,
            225,
            styles
          );
          planetTwoDistance.size = 35;
          var planetTwoPeriod = two.makeText(`Orbital Period: ${planet_list[2].orbital_period} days`, 350, 260, styles);
          planetTwoPeriod.size = 35;
          var planetTwoDiameter = two.makeText(`Diameter: ${planet_list[2].diameter} Kilometers`, 350, 295, styles);
          planetTwoDiameter.size = 35;
          var planetTwoMass = two.makeText(`Mass: ${planet_list[2].mass} x 10^24 Kilos`, 350, 330, styles);
          planetTwoMass.size = 35;
          planetTwoOrbit.stroke = "#09C8E2";
          planetTwo.stroke = "#09C8E2";
          planetTwo.linewidth = 3;
          let ignore_3 = function () {
            two.remove(planetTwoInfo);
            two.remove(box);
            two.remove(planetTwoDistance);
            two.remove(planetTwoPeriod);
            two.remove(planetTwoDiameter);
            two.remove(planetTwoMass);
            planetTwo.linewidth = 0;
            planetTwoOrbit.stroke = "white";
            planetTwo.stroke = "black";
          };
          planetTwoOrbit._renderer.elem.addEventListener("mouseout", ignore_3, false);
        };
        planetTwoOrbit._renderer.elem.addEventListener("mousemove", highlight_3, false);

        let highlight_4 = function () {
          var box = two.makeRectangle(350, 240, 600, 235);
          box.fill = "white";
          box.stroke = "#09C8E2";
          var planetThreeInfo = two.makeText(planet_list[3].name, 350, 175);
          planetThreeInfo.size = 75;
          var planetThreeDistance = two.makeText(
            `Orbital Distance: ${planet_list[3].orbital_distance} AU`,
            350,
            225,
            styles
          );
          planetThreeDistance.size = 35;
          var planetThreePeriod = two.makeText(
            `Orbital Period: ${planet_list[3].orbital_period} days`,
            350,
            260,
            styles
          );
          planetThreePeriod.size = 35;
          var planetThreeDiameter = two.makeText(`Diameter: ${planet_list[3].diameter} Kilometers`, 350, 295, styles);
          planetThreeDiameter.size = 35;
          var planetThreeMass = two.makeText(`Mass: ${planet_list[3].mass} x 10^24 Kilos`, 350, 330, styles);
          planetThreeMass.size = 35;
          planetThreeOrbit.stroke = "#09C8E2";
          planetThree.stroke = "#09C8E2";
          planetThree.linewidth = 3;
          let ignore_4 = function () {
            two.remove(planetThreeInfo);
            two.remove(box);
            two.remove(planetThreeDistance);
            two.remove(planetThreePeriod);
            two.remove(planetThreeDiameter);
            two.remove(planetThreeMass);
            planetThree.linewidth = 0;
            planetThreeOrbit.stroke = "white";
            planetThree.stroke = "black";
          };
          planetThreeOrbit._renderer.elem.addEventListener("mouseout", ignore_4, false);
        };
        planetThreeOrbit._renderer.elem.addEventListener("mousemove", highlight_4, false);

        let highlight_5 = function () {
          var box = two.makeRectangle(350, 240, 600, 235);
          box.fill = "white";
          box.stroke = "#09C8E2";
          var planetFourInfo = two.makeText(planet_list[4].name, 350, 175);
          planetFourInfo.size = 75;
          var planetFourDistance = two.makeText(
            `Orbital Distance: ${planet_list[4].orbital_distance} AU`,
            350,
            225,
            styles
          );
          planetFourDistance.size = 35;
          var planetFourPeriod = two.makeText(
            `Orbital Period: ${planet_list[4].orbital_period} days`,
            350,
            260,
            styles
          );
          planetFourPeriod.size = 35;
          var planetFourDiameter = two.makeText(`Diameter: ${planet_list[4].diameter} Kilometers`, 350, 295, styles);
          planetFourDiameter.size = 35;
          var planetFourMass = two.makeText(`Mass: ${planet_list[4].mass} x 10^24 Kilos`, 350, 330, styles);
          planetFourMass.size = 35;
          planetFourOrbit.stroke = "#09C8E2";
          planetFour.stroke = "#09C8E2";
          planetFour.linewidth = 3;
          let ignore_5 = function () {
            two.remove(planetFourInfo);
            two.remove(box);
            two.remove(planetFourDistance);
            two.remove(planetFourPeriod);
            two.remove(planetFourDiameter);
            two.remove(planetFourMass);
            planetFour.linewidth = 0;
            planetFourOrbit.stroke = "white";
            planetFour.stroke = "black";
          };
          planetFourOrbit._renderer.elem.addEventListener("mouseout", ignore_5, false);
        };
        planetFourOrbit._renderer.elem.addEventListener("mousemove", highlight_5, false);

        let highlight_6 = function () {
          var box = two.makeRectangle(350, 240, 600, 235);
          box.fill = "white";
          box.stroke = "#09C8E2";
          var planetFiveInfo = two.makeText(planet_list[5].name, 350, 175);
          planetFiveInfo.size = 75;
          var planetFiveDistance = two.makeText(
            `Orbital Distance: ${planet_list[5].orbital_distance} AU`,
            350,
            225,
            styles
          );
          planetFiveDistance.size = 35;
          var planetFivePeriod = two.makeText(
            `Orbital Period: ${planet_list[5].orbital_period} days`,
            350,
            260,
            styles
          );
          planetFivePeriod.size = 35;
          var planetFiveDiameter = two.makeText(`Diameter: ${planet_list[5].diameter} Kilometers`, 350, 295, styles);
          planetFiveDiameter.size = 35;
          var planetFiveMass = two.makeText(`Mass: ${planet_list[5].mass} x 10^24 Kilos`, 350, 330, styles);
          planetFiveMass.size = 35;
          planetFiveOrbit.stroke = "#09C8E2";
          planetFive.stroke = "#09C8E2";
          planetFive.linewidth = 3;
          let ignore_6 = function () {
            two.remove(planetFiveInfo);
            two.remove(box);
            two.remove(planetFiveDistance);
            two.remove(planetFivePeriod);
            two.remove(planetFiveDiameter);
            two.remove(planetFiveMass);
            planetFive.linewidth = 0;
            planetFiveOrbit.stroke = "white";
            planetFive.stroke = "black";
          };
          planetFiveOrbit._renderer.elem.addEventListener("mouseout", ignore_6, false);
        };
        planetFiveOrbit._renderer.elem.addEventListener("mousemove", highlight_6, false);

        let highlight_7 = function () {
          var box = two.makeRectangle(350, 240, 600, 235);
          box.fill = "white";
          box.stroke = "#09C8E2";
          var planetSixInfo = two.makeText(planet_list[6].name, 350, 175);
          planetSixInfo.size = 75;
          var planetSixDistance = two.makeText(
            `Orbital Distance: ${planet_list[6].orbital_distance} AU`,
            350,
            225,
            styles
          );
          planetSixDistance.size = 35;
          var planetSixPeriod = two.makeText(`Orbital Period: ${planet_list[6].orbital_period} days`, 350, 260, styles);
          planetSixPeriod.size = 35;
          var planetSixDiameter = two.makeText(`Diameter: ${planet_list[6].diameter} Kilometers`, 350, 295, styles);
          planetSixDiameter.size = 35;
          var planetSixMass = two.makeText(`Mass: ${planet_list[6].mass} x 10^24 Kilos`, 350, 330, styles);
          planetSixMass.size = 35;
          planetSixOrbit.stroke = "#09C8E2";
          planetSix.stroke = "#09C8E2";
          planetSix.linewidth = 3;
          let ignore_7 = function () {
            two.remove(planetSixInfo);
            two.remove(box);
            two.remove(planetSixDistance);
            two.remove(planetSixPeriod);
            two.remove(planetSixDiameter);
            two.remove(planetSixMass);
            planetSix.linewidth = 0;
            planetSixOrbit.stroke = "white";
            planetSix.stroke = "black";
          };
          planetSixOrbit._renderer.elem.addEventListener("mouseout", ignore_7, false);
        };
        planetSixOrbit._renderer.elem.addEventListener("mousemove", highlight_7, false);

        let highlight_8 = function () {
          var box = two.makeRectangle(350, 240, 600, 235);
          box.fill = "white";
          box.stroke = "#09C8E2";
          var planetSevenInfo = two.makeText(planet_list[7].name, 350, 175);
          planetSevenInfo.size = 75;
          var planetSevenDistance = two.makeText(
            `Orbital Distance: ${planet_list[7].orbital_distance} AU`,
            350,
            225,
            styles
          );
          planetSevenDistance.size = 35;
          var planetSevenPeriod = two.makeText(
            `Orbital Period: ${planet_list[7].orbital_period} days`,
            350,
            260,
            styles
          );
          planetSevenPeriod.size = 35;
          var planetSevenDiameter = two.makeText(`Diameter: ${planet_list[7].diameter} Kilometers`, 350, 295, styles);
          planetSevenDiameter.size = 35;
          var planetSevenMass = two.makeText(`Mass: ${planet_list[7].mass} x 10^24 Kilos`, 350, 330, styles);
          planetSevenMass.size = 35;
          planetSevenOrbit.stroke = "#09C8E2";
          planetSeven.stroke = "#09C8E2";
          planetSeven.linewidth = 3;
          let ignore_8 = function () {
            two.remove(planetSevenInfo);
            two.remove(box);
            two.remove(planetSevenDistance);
            two.remove(planetSevenPeriod);
            two.remove(planetSevenDiameter);
            two.remove(planetSevenMass);
            planetSeven.linewidth = 0;
            planetSevenOrbit.stroke = "white";
            planetSeven.stroke = "black";
          };
          planetSevenOrbit._renderer.elem.addEventListener("mouseout", ignore_8, false);
        };
        planetSevenOrbit._renderer.elem.addEventListener("mousemove", highlight_8, false);

        // Stars
        var width = window.innerWidth;
        var height = window.innerHeight;
        var star;
        for (var i = 0; i < 200; i++) {
          var randX = Math.round(Math.random() * width);
          var randY = Math.round(Math.random() * height);
          star = two.makeCircle(randX, randY, 2);
        }

        //Set the color of the planets
        sun.fill = planet_list[0].color;
        planetOne.fill = planet_list[1].color;
        planetTwo.fill = planet_list[2].color;
        planetThree.fill = planet_list[3].color;
        planetFour.fill = planet_list[4].color;
        planetFive.fill = planet_list[5].color;
        planetSix.fill = planet_list[6].color;
        planetSeven.fill = planet_list[7].color;

        star.fill = "#FAFAFA";

        //Group the planets
        var PlanetOne = two.makeGroup(planetOne);
        var PlanetTwo = two.makeGroup(planetTwo);
        var PlanetThree = two.makeGroup(planetThree);
        var PlanetFour = two.makeGroup(planetFour);
        var PlanetFive = two.makeGroup(planetFive);
        var PlanetSix = two.makeGroup(planetSix);
        var PlanetSeven = two.makeGroup(planetSeven);

        var planets = two.makeGroup(
          planetSevenOrbit,
          planetSixOrbit,
          planetFiveOrbit,
          planetFourOrbit,
          planetThreeOrbit,
          planetTwoOrbit,
          planetOneOrbit,
          sun,
          PlanetOne,
          PlanetTwo,
          PlanetThree,
          PlanetFour,
          PlanetFive,
          PlanetSix,
          PlanetSeven
        );

        //Center everything in the center of the element
        planets.translation.set(two.width / 2, two.height / 2);
        // Mercury.rotation = 4;
        PlanetOne.rotation = 3;
        PlanetTwo.rotation = 4;
        PlanetThree.rotation = 5;
        PlanetFour.rotation = 6;
        PlanetFive.rotation = 7;
        PlanetSix.rotation = 8;
        PlanetSeven.rotation = 9;

        // Bind a function to scale and rotate the group to the animation loop.
        two
          .bind("update", function () {
            //Set the "ZOOM" of the system
            planets.scale = 0.8;

            //Rotate all the planets
            // Mercury.rotation += 88 / 36500;
            var speedOne = planet_list[1].orbital_period * 100;
            var speedTwo = planet_list[2].orbital_period * 100;
            var speedThree = planet_list[3].orbital_period * 100;
            var speedFour = planet_list[4].orbital_period * 100;
            var speedFive = planet_list[5].orbital_period * 100;
            var speedSix = planet_list[6].orbital_period * 100;
            var speedSeven = planet_list[7].orbital_period * 100;

            PlanetOne.rotation += 365 / speedOne;
            PlanetTwo.rotation += 365 / speedTwo;
            PlanetThree.rotation += 365 / speedThree;
            PlanetFour.rotation += 365 / speedFour;
            PlanetFive.rotation += 365 / speedFive;
            PlanetSix.rotation += 365 / speedSix;
            PlanetSeven.rotation += 365 / speedSeven;
          })
          .play(); // Finally, start the animation loop
      });
    },
  },
};
</script>
