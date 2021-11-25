<template>
  <div class="systemindex">
    <div v-for="system in systems" v-bind:key="system.id">{{ system.name }}</div>
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
    };
  },

  created: function () {
    this.getSystems();
  },

  methods: {
    getSystems: function () {
      axios.get("/systems").then((response) => {
        this.systems = response.data;
        console.log(response.data);
      });
    },
  },
};
</script>
