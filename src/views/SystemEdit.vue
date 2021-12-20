<template>
  <div class="currentSystem">
    <form v-on:submit.prevent="">
      <h1>
        Change is the natural state of the
        <span>Universe</span>
        .
      </h1>
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
        <label>Image URL:</label>
        <p></p>
        <input type="string" v-model="currentSystemParams.image" />
      </div>
      <p></p>
      <div>
        <label>Description:</label>
        <p></p>

        <textarea type="string" v-model="currentSystemParams.description" class="description" />
        <p></p>
      </div>
      <p></p>
      <button class="bn30" v-on:click="currentSystem()">Update</button>
      <p></p>
      <button class="bn30" v-on:click="deleteSystem()">Delete System</button>
      <p></p>
      <button class="bn30" v-on:click="$router.go(-1)">Back</button>
    </form>
  </div>
</template>

<style scoped>
.currentSystem {
  text-align: center;
  margin-top: 125px;
}

h1 {
  font-family: "Poppins", sans-serif;
  text-align: center;
}

span {
  font-family: "Poppins", sans-serif;
  text-align: center;
  color: #645ad4;
}

.description {
  width: 60%;
  height: 150px;
  resize: none;
  border: 1px solid grey;
  color: grey;
  background: rgb(10, 10, 10);
  padding: 12px 20px;
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
