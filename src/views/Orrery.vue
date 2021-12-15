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
        }
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

        let highlight_1 = function () {
          var central_star = planet_list[0];
          var sun_info = two.makeText(`${central_star.name}`, 450, 250);
          sun_info.size = 100;
          sun.fill = "red";
          let ignore_1 = function () {
            two.remove(sun_info);
            sun.fill = `${central_star.color}`;
          };
          sun._renderer.elem.addEventListener("mouseout", ignore_1, false);
        };
        sun._renderer.elem.addEventListener("mousemove", highlight_1, false);

        let highlight_2 = function () {
          var planetOneInfo = two.makeText(planet_list[1].name, 450, 250);
          planetOneInfo.size = 100;
          planetOne.fill = "red";
          let ignore_2 = function () {
            two.remove(planetOneInfo);
            planetOne.fill = planet_list[1].color;
          };
          planetOneOrbit._renderer.elem.addEventListener("mouseout", ignore_2, false);
        };
        planetOneOrbit._renderer.elem.addEventListener("mousemove", highlight_2, false);

        let highlight_3 = function () {
          var planetTwoInfo = two.makeText(planet_list[2].name, 450, 250);
          planetTwoInfo.size = 100;
          planetTwo.fill = "red";
          let ignore_3 = function () {
            two.remove(planetTwoInfo);
            planetTwo.fill = planet_list[2].color;
          };
          planetTwoOrbit._renderer.elem.addEventListener("mouseout", ignore_3, false);
        };
        planetTwoOrbit._renderer.elem.addEventListener("mousemove", highlight_3, false);

        let highlight_4 = function () {
          var planetThreeInfo = two.makeText(planet_list[3].name, 450, 250);
          planetThreeInfo.size = 100;
          planetThree.fill = "red";
          let ignore_4 = function () {
            two.remove(planetThreeInfo);
            planetThree.fill = planet_list[3].color;
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
            var speedOne = planet_list[1].orbital_distance * 36500;
            var speedTwo = planet_list[2].orbital_distance * 36500;
            var speedThree = planet_list[3].orbital_distance * 36500;

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
  },
};
</script>
