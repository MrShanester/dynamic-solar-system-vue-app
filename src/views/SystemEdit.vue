<template>
  <div class="currentSystem">
    <form v-on:submit.prevent="">
      <h1>Update, as you will.</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <p></p>
        <input type="string" v-model="currentSystemParams.name" />
      </div>
      <p></p>
      <div>
        <label>Description::</label>
        <p></p>
        <input type="string" v-model="currentSystemParams.description" />
        <p></p>
      </div>
      <p></p>
      <div>
        <label>Image URL:</label>
        <p></p>
        <input type="string" v-model="currentSystemParams.image" />
      </div>
      <p></p>
      <button v-on:click="currentSystem()">Update</button>
      <p></p>
      <button v-on:click="deleteSystem()">Delete System</button>
      <p></p>
      <button v-on:click="home()">Back</button>
    </form>
  </div>
</template>

<style scoped>
.currentSystem {
  text-align: center;
  margin-top: 125px;
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      currentSystemParams: {},
      errors: [],
      status: "",
    };
  },

  created: function () {
    this.systemLoad();
  },

  methods: {
    currentSystem: function () {
      axios
        .patch("/systems/" + this.$route.params.id, this.currentSystemParams)
        .then((response) => {
          this.systems.push(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          this.status = error.response.status;

          console.log(error.response.data);
        });
      this.$router.push("/SystemIndex");
      location.reload();
    },
    home: function () {
      this.$router.push("/SystemIndex");
    },
    systemLoad: function () {
      axios.get("/systems/" + this.$route.params.id).then((response) => {
        this.currentSystemParams = response.data;
      });
    },
    deleteSystem: function () {
      axios.delete("/systems/" + this.$route.params.id).then((response) => {
        console.log("System destroyed", response.data);
        this.$router.push("/SystemIndex");
      });
    },
  },
};
</script>
