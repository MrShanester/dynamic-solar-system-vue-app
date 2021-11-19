<template>
  <div class="home">
    <h1>Hello, {{ name }}</h1>
    <div v-for="system in systems" v-bind:key="system.id">
      <h2>{{ system.name }}</h2>
    </div>
  </div>
</template>

<style scoped>
.home {
  color: whitesmoke;
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      systems: [],
    };
  },
  created: function () {
    this.indexSystems();
  },
  methods: {
    indexSystems: function () {
      axios.get("/systems").then((response) => {
        this.systems = response.data;
      });
    },
  },
};
</script>
