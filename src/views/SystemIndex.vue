<template>
  <body>
    <div class="systemindex">
      <h1 id="header">Welcome, {{ this.name }}</h1>
      <p></p>
      <p></p>

      <section id="menu" class="menu section-bg">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <!-- <h2>Menu</h2> -->
            <p>Your Systems</p>
          </div>
          <div v-for="system in systems" v-bind:key="system.id">
            <div class="row menu-container" data-aos="fade-up" data-aos-delay="200">
              <div class="col-lg-6 menu-item">
                <img v-bind:src="system.image" class="menu-img" v-bind:alt="`No Image`" />
                <div class="menu-content">
                  <router-link v-bind:to="`/systems/${system.id}`">
                    <a href="#">{{ system.name }}</a>
                  </router-link>
                </div>
                <div class="menu-ingredients">{{ system.description }}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <p></p>
      <div class="btns">
        <router-link v-bind:to="`/NewSystem`">
          <a class="bn30">Create New System</a>
        </router-link>
      </div>
      <p></p>
      <p></p>
      <p></p>
    </div>
  </body>
</template>

<style scoped>
.systemindex {
  margin-top: 125px;
  text-align: center;
  color: whitesmoke;
}

#header {
  margin-left: 100px;
  text-align: left;
  color: wheat;
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      systems: [],
      name: "",
    };
  },

  created: function () {
    this.getSystems();
    this.getName();
  },

  methods: {
    getSystems: function () {
      axios.get("/systems").then((response) => {
        this.systems = response.data;
        console.log(response.data);
      });
    },
    getName: function () {
      axios.get("/name").then((response) => {
        this.name = response.data;
        console.log(response.data);
      });
    },
  },
};
</script>
