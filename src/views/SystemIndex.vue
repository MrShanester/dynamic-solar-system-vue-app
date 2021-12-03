<template>
  <div class="systemindex">
    <h1>Hello, {{ this.name }}</h1>
    <div v-for="system in systems" v-bind:key="system.id">
      <h2>{{ system.name }}</h2>
    </div>
    <router-link v-bind:to="`/NewSystem`">
      <button>Create New System</button>
    </router-link>
  </div>
</template>

<style scoped>
.systemindex {
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
      systems: [],
      name: "",
    };
  },

  created: function () {
    this.getSystems();
    this.getName();
  },

  methods: {
    getSystems: function () {
      axios.get("/systems").then((response) => {
        this.systems = response.data;
        console.log(response.data);
      });
    },
    getName: function () {
      axios.get("/name").then((response) => {
        this.name = response.data;
        console.log(response.data);
      });
    },
  },
};
</script>
