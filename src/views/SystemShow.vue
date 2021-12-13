<template>
  <div class="systemShow">
    <h1>{{ system.name }}</h1>
    <img v-bind:src="system.image" v-bind:alt="`No Image`" class="rounded" />
    <p></p>
    <p></p>
    <h2>{{ system.description }}</h2>
    <p></p>
    <p></p>

    <section id="specials" class="specials">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>{{ system.name }}'s Planets</h2>
          <p>View or Edit Planets</p>
        </div>
        <div v-for="planet in planets" v-bind:key="planet.id">
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
                          <h5 class="card-title">{{ planet.name }}</h5>
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

    <p></p>
    <router-link v-bind:to="`/SystemIndex`">
      <button class="bn30">Home</button>
    </router-link>
    <p></p>

    <router-link v-bind:to="`/systems/${system.id}/edit`">
      <button class="bn30">Edit System</button>
    </router-link>
    <p></p>
    <router-link v-bind:to="`/NewPlanet/${system.id}`">
      <button class="bn30">Add a Planet</button>
    </router-link>
    |
    <router-link v-bind:to="`/NewStar/${system.id}`">
      <button class="bn30">Add a Star</button>
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
      planets: [],
    };
  },
  created: function () {
    this.systemShow();
    this.planetsShow();
  },
  methods: {
    systemShow: function () {
      axios.get("/systems/" + this.$route.params.id).then((response) => {
        this.system = response.data;
        console.log(response.data);
      });
    },
    planetsShow: function () {
      axios.get("/planets/index/" + this.$route.params.id).then((response) => {
        this.planets = response.data;
        console.log(response.data);
      });
    },
  },
};
</script>
