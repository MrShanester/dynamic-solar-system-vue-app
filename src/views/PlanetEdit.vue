<template>
  <div class="currentPlanet">
    <form v-on:submit.prevent="">
      <h1>
        Update your
        <span>planet</span>
        .
      </h1>
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
        <label>Orbital Period in Standard Days:</label>
        <p></p>
        <input type="integer" v-model="currentPlanetParams.orbital_period" />
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
      <div>
        <label>Description:</label>
        <p></p>
        <textarea type="string" v-model="currentPlanetParams.description" class="description" />
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
        .patch(
          "https://dynamic-solar-system-app.herokuapp.com/planets/" + this.$route.params.id,
          this.currentPlanetParams
        )
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
      axios.get("https://dynamic-solar-system-app.herokuapp.com/planets/" + this.$route.params.id).then((response) => {
        this.currentPlanetParams = response.data;
      });
    },
    deletePlanet: function () {
      axios
        .delete("https://dynamic-solar-system-app.herokuapp.com/planets/" + this.$route.params.id)
        .then((response) => {
          console.log("Planet destroyed", response.data);
          this.$router.push("/SystemIndex");
        });
    },
  },
};
</script>
