<template>
  <div class="newPlanet">
    <form v-on:submit.prevent="">
      <h1>
        Add a
        <span>planet</span>
        .
      </h1>
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
        <label>Orbital Period in Standard Days:</label>
        <p></p>
        <input type="integer" v-model="newPlanetParams.orbital_period" />
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
      <div>
        <label>Description:</label>
        <p></p>
        <textarea type="string" v-model="newPlanetParams.description" class="description" />
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
      newPlanetParams: {
        system_id: this.$route.params.id,
        name: "",
        diameter: 0,
        mass: 0,
        orbital_distance: 0,
        orbital_period: 0,
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
      this.$router.push(`/systems/${this.$route.params.id}`);
      location.reload();
    },
    home: function () {
      this.$router.push(`/systems/${this.$route.params.id}`);
    },
  },
};
</script>
