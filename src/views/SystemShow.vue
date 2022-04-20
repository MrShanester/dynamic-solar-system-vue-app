<template>
  <div class="systemShow">
    <h1>{{ system.name }}</h1>
    <br />
    <img v-bind:src="system.image" v-bind:alt="`No Image`" class="nice" />
    <p></p>
    <p></p>
    <h2>{{ system.description }}</h2>
    <p></p>
    <p></p>
    <br />
    <router-link v-bind:to="`/NewPlanet/${system.id}`">
      <button class="bn30">Add a Planet</button>
    </router-link>
    ||
    <router-link v-bind:to="`/NewStar/${system.id}`">
      <button class="bn30">Add a Star</button>
    </router-link>

    <section id="specials" class="specials">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>{{ system.name }}'s Planets</h2>
          <p class="name">
            View or
            <span class="span">Edit</span>
            Planets
          </p>
        </div>
        <div v-for="planet in orderBy(planets, 'orbital_distance')" v-bind:key="planet.id">
          <router-link v-bind:to="`/planets/${planet.id}`">
            <div class="row" data-aos="fade-up" data-aos-delay="100">
              <div class="col-lg-3">
                <ul class="nav nav-tabs flex-column">
                  <li class="nav-item">
                    <router-link v-bind:to="`/planets/${planet.id}`">
                      <a class="nav-link show" data-bs-toggle="tab">
                        {{ planet.name }}
                      </a>
                    </router-link>
                  </li>
                </ul>
              </div>
              <div class="col-lg-9 mt-4 mt-lg-0">
                <div class="tab-content">
                  <div class="tab-pane active show" id="tab-1">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <router-link v-bind:to="`/planets/${planet.id}`">
                          <h5 class="special">{{ planet.name }}</h5>
                        </router-link>
                        <p class="fst-italic">
                          {{ planet.description }}
                        </p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img height="180" width="320" v-bind:src="planet.image" alt="" c />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>
    <div class="btn-pretty">
      <p></p>
      <router-link v-bind:to="`/SystemIndex`">
        <button class="bn30">Home</button>
      </router-link>
      <p></p>

      <router-link v-bind:to="`/systems/${system.id}/edit`">
        <button class="bn30">Edit System</button>
      </router-link>

      <p></p>
      <router-link v-bind:to="`/Orrery/${system.id}`">
        <button class="bn30">View Orrery</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-family: "Poppins", sans-serif;
  text-align: center;
}

.nice {
  border: 2px solid #645ad4;
  max-width: 100%;
  height: auto;
}

h2 {
  font-family: "Poppins", sans-serif;
}

.special {
  font-family: "Poppins", sans-serif;
  text-align: center;
  color: #645ad4;
}

.special:hover {
  font-family: "Poppins", sans-serif;
  text-align: center;
  color: #b3afe8;
}

.name {
  font-family: "Poppins", sans-serif;
  color: white;
}

.span {
  font-family: "Poppins", sans-serif;
  color: #645ad4;
}

.systemShow {
  margin-top: 125px;
  text-align: center;
  color: whitesmoke;
}

.btn-pretty {
  padding-bottom: 50px;
}
</style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],

  data: function () {
    return {
      system: {},
      planets: [],
    };
  },
  created: function () {
    this.systemShow();
    this.planetsShow();
  },
  methods: {
    systemShow: function () {
      axios.get("https://dynamic-solar-system-app.herokuapp.com/systems/" + this.$route.params.id).then((response) => {
        this.system = response.data;
        console.log(response.data);
      });
    },
    planetsShow: function () {
      axios
        .get("https://dynamic-solar-system-app.herokuapp.com/planets/index/" + this.$route.params.id)
        .then((response) => {
          this.planets = response.data;
          console.log(response.data);
        });
    },
  },
};
</script>
