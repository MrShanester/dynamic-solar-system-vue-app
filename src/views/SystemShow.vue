<template>
  <div class="systemShow">
    <h1>{{ system.name }}</h1>
    <img v-bind:src="system.image" v-bind:alt="`No Image`" />
    <h2>{{ system.description }}</h2>
    <router-link v-bind:to="`/SystemIndex`">
      <button>Home</button>
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
    };
  },
  created: function () {
    this.systemShow();
  },
  methods: {
    systemShow: function () {
      axios.get("/systems/" + this.$route.params.id).then((response) => {
        this.system = response.data;
        console.log(response.data);
      });
    },
  },
};
</script>
