<template>
  <div class="planetShow">
    <h1>{{ planet.name }}</h1>
    <p></p>
    <img v-bind:src="planet.image" v-bind:alt="`No Image`" />
    <p></p>
    <small>{{ planet.description }}</small>
    <p></p>
    <router-link v-bind:to="`/planets/${planet.id}/edit`">
      <button class="bn30">Edit Planet</button>
    </router-link>
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
