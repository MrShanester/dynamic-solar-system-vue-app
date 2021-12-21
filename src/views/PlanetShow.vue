<template>
  <div class="planetShow">
    <h1>{{ planet.name }}</h1>
    <p></p>
    <img class="nice" v-bind:src="planet.image" v-bind:alt="`No Image`" />
    <p></p>
    <h2>{{ planet.name }}'s Features:</h2>
    <br />
    <p>Diameter: {{ planet.diameter }} KM</p>
    <p></p>
    <p>Mass: {{ planet.mass }} x 10^24 KG</p>
    <p></p>
    <p>Orbital Distance: {{ planet.orbital_distance }} AU</p>
    <p></p>
    <p>Orbital Period: {{ planet.orbital_period }} Standard Days</p>
    <br />
    <h2>Description:</h2>
    <p></p>
    <p class="desc">{{ planet.description }}</p>
    <p></p>
    <br />
    <router-link v-bind:to="`/planets/${planet.id}/edit`">
      <button class="bn30">Edit Planet</button>
    </router-link>
    <br />
    <p></p>
    <router-link v-bind:to="`/systems/${planet.system_id}`">
      <button class="bn30">Back</button>
    </router-link>
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

p {
  font-family: "Poppins", sans-serif;
  text-align: center;
}

.nice {
  border: 2px solid #645ad4;
  max-width: 100%;
  height: auto;
}

.desc {
  border: 2px solid #525066;
  margin-right: 150px;
  margin-left: 150px;
  padding: 12px 20px;
  color: rgb(206, 204, 204);
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
