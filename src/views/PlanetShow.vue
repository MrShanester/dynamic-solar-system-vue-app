<template>
  <div class="planetShow">
    <h1>{{ planet.name }}</h1>
    <p></p>
    <img class="nice" v-bind:src="planet.image" v-bind:alt="`No Image`" />
    <p></p>
    <h2>{{ planet.name }}'s Features:</h2>
    <small>Diameter: {{ planet.diameter }} KM</small>
    <br />
    <small>Mass: {{ planet.mass }} x 10^24 KG</small>
    <br />
    <small>Orbital Distance: {{ planet.orbital_distance }} AU</small>
    <br />
    <small>Orbital Period: {{ planet.orbital_period }} Standard Days</small>
    <br />
    <small>Description:</small>
    <br />
    <small>{{ planet.description }}</small>
    <p></p>
    <br />
    <router-link v-bind:to="`/planets/${planet.id}/edit`">
      <button class="bn30">Edit Planet</button>
    </router-link>
    <br />
    <p></p>
    <button class="bn30" v-on:click="$router.go(-1)">Back</button>
  </div>
</template>

<style scoped>
.planetShow {
  margin-top: 125px;
  text-align: center;
  color: whitesmoke;
}

h1 {
  font-family: "Poppins", sans-serif;
  text-align: center;
}

h2 {
  font-family: "Poppins", sans-serif;
  text-align: center;
}

small {
  font-family: "Poppins", sans-serif;
  text-align: center;
}

.nice {
  border: 2px solid #645ad4;
  max-width: 100%;
  height: auto;
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      planet: {},
    };
  },
  created: function () {
    this.planetShow();
  },
  methods: {
    planetShow: function () {
      axios.get("/planets/" + this.$route.params.id).then((response) => {
        this.planet = response.data;
        console.log(response.data);
      });
    },
  },
};
</script>
