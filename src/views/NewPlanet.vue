<template>
  <div class="newPlanet">
    <form v-on:submit.prevent="">
      <h1>Add a planet.</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <p></p>
        <input type="string" v-model="newPlanetParams.name" />
      </div>
      <p></p>
      <div>
        <label>Diameter in Kilometers:</label>
        <p></p>
        <input type="integer" v-model="newPlanetParams.diameter" />
        <p></p>
      </div>
      <p></p>
      <div>
        <label>Mass × 10^24 kg:</label>
        <p></p>
        <input type="integer" v-model="newPlanetParams.mass" />
      </div>
      <div>
        <label>Orbital Distance in AU:</label>
        <p></p>
        <input type="integer" v-model="newPlanetParams.orbital_distance" />
      </div>
      <div>
        <label>Description:</label>
        <p></p>
        <input type="string" v-model="newPlanetParams.description" />
      </div>
      <div>
        <label>Planet Color:</label>
        <p></p>
        <input type="string" v-model="newPlanetParams.color" />
      </div>
      <div>
        <label>Image:</label>
        <p></p>
        <input type="string" v-model="newPlanetParams.image" />
      </div>
      <p></p>
      <button class="bn30" v-on:click="createPlanet()">Create</button>
      <p></p>
      <button class="bn30" v-on:click="$router.go(-1)">Back</button>
    </form>
  </div>
</template>

<style scoped>
.newPlanet {
  text-align: center;
  margin-top: 125px;
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newPlanetParams: {
        system_id: this.$route.params.id,
        name: "",
        diameter: 0,
        mass: 0,
        orbital_distance: 0,
        description: "",
        image: "",
        color: "",
        is_star: false,
      },
      errors: [],
      status: "",
    };
  },

  methods: {
    createPlanet: function () {
      axios
        .post("/planets", this.newPlanetParams)
        .then((response) => {
          this.planets.push(response.data);
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
