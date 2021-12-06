<template>
  <div class="newSystem">
    <form v-on:submit.prevent="">
      <h1>Design, as you will.</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <p></p>
        <input type="string" v-model="newSystemParams.name" />
      </div>
      <p></p>
      <div>
        <label>Description::</label>
        <p></p>
        <input type="string" v-model="newSystemParams.description" />
        <p></p>
      </div>
      <p></p>
      <div>
        <label>Image URL:</label>
        <p></p>
        <input type="string" v-model="newSystemParams.image" />
      </div>
      <p></p>
      <button class="bn30" v-on:click="createSystem()">Create</button>
      <p></p>
      <button class="bn30" v-on:click="home()">Back</button>
    </form>
  </div>
</template>

<style scoped>
.newSystem {
  text-align: center;
  margin-top: 125px;
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newSystemParams: {
        name: "",
        image: "",
        description: "",
      },
      errors: [],
      status: "",
    };
  },

  methods: {
    createSystem: function () {
      axios
        .post("/systems", this.newSystemParams)
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
  },
};
</script>
