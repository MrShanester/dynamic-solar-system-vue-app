<template>
  <div class="currentPlanet">
    <form v-on:submit.prevent="">
      <h1>Update your planet.</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <p></p>
        <input type="string" v-model="currentPlanetParams.name" />
      </div>
      <p></p>
      <div>
        <label>Diameter in Kilometers:</label>
        <p></p>
        <input type="integer" v-model="currentPlanetParams.diameter" />
        <p></p>
      </div>
      <p></p>
      <div>
        <label>Mass × 10^24 kg:</label>
        <p></p>
        <input type="integer" v-model="currentPlanetParams.mass" />
      </div>
      <div>
        <label>Orbital Distance in AU:</label>
        <p></p>
        <input type="integer" v-model="currentPlanetParams.orbital_distance" />
      </div>
      <div>
        <label>Description:</label>
        <p></p>
        <input type="string" v-model="currentPlanetParams.description" />
      </div>
      <div>
        <label>Color:</label>
        <p></p>
        <input type="string" v-model="currentPlanetParams.color" />
      </div>
      <div>
        <label>Image:</label>
        <p></p>
        <input type="string" v-model="currentPlanetParams.image" />
      </div>
      <p></p>
      <button class="bn30" v-on:click="currentPlanet()">Update</button>
      <p></p>
      <button class="bn30" v-on:click="deletePlanet()">Delete Planet</button>
      <p></p>
      <button class="bn30" v-on:click="$router.go(-1)">Back</button>
    </form>
  </div>
</template>

<style scoped>
.currentPlanet {
  text-align: center;
  margin-top: 125px;
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      currentPlanetParams: {},
      errors: [],
      status: "",
    };
  },

  created: function () {
    this.planetLoad();
  },

  methods: {
    currentPlanet: function () {
      axios
        .patch("/planets/" + this.$route.params.id, this.currentPlanetParams)
        .then((response) => {
          this.planets.push(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          this.status = error.response.status;

          console.log(error.response.data);
        });
      this.$router.push(`/planets/${this.$route.params.id}`);
      location.reload();
    },
    home: function () {
      this.$router.push(`/planets/${this.$route.params.id}`);
    },
    planetLoad: function () {
      axios.get("/planets/" + this.$route.params.id).then((response) => {
        this.currentPlanetParams = response.data;
      });
    },
    deletePlanet: function () {
      axios.delete("/planets/" + this.$route.params.id).then((response) => {
        console.log("Planet destroyed", response.data);
        this.$router.push("/SystemIndex");
      });
    },
  },
};
</script>
