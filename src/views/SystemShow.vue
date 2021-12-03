<template>
  <div class="systemShow">
    <h1>{{ system.name }}</h1>
    <img v-bind:src="system.image" v-bind:alt="`No Image`" />
    <h2>{{ system.description }}</h2>

    <p></p>
    <h2>Planets in {{ system.name }}</h2>
    <p></p>
    <div v-for="planet in planets" v-bind:key="planet.id">
      <router-link v-bind:to="`/planets/${planet.id}`">
        <h2>{{ planet.name }}</h2>
      </router-link>
    </div>
    <p></p>
    <router-link v-bind:to="`/SystemIndex`">
      <button>Home</button>
    </router-link>
    <p></p>

    <router-link v-bind:to="`/systems/${system.id}/edit`">
      <button>Edit System</button>
    </router-link>
  </div>
</template>

<style scoped>
.systemShow {
  margin-top: 125px;
  text-align: center;
  color: whitesmoke;
}
</style>

<script>
import axios from "axios";

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
  },
};
</script>
