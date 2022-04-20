<template>
  <body id="cool">
    <div class="systemindex">
      <div class="margin">
        <h1>
          Welcome,
          <span class="span">{{ this.name }}</span>
        </h1>
        <p></p>
        <p></p>
        <br />

        <section id="menu" class="menu section-bg">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <!-- <h2>Menu</h2> -->
              <p class="top">Your Systems</p>
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
        <br />

        <router-link v-bind:to="`/NewSystem`">
          <button class="bn30">Create New System</button>
        </router-link>

        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  </body>
</template>

<style scoped>
.top {
  font-family: "Poppins", sans-serif;
  color: white;
}
h1 {
  font-family: "Poppins", sans-serif;
  text-align: left;
  margin-left: 50px;
}
.span {
  color: #645ad4;
}
.systemindex {
  text-align: center;
  color: whitesmoke;
}

#header {
  margin-left: 100px;
  text-align: left;
  color: wheat;
}

#cool {
  width: 100%;
  height: 100vh;
  background: url("https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    top center;
  background-size: cover;
  position: relative;
  padding: 0;
}

.margin {
  padding-top: 125px;
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
      axios.get("https://dynamic-solar-system-app.herokuapp.com/systems").then((response) => {
        this.systems = response.data;
        console.log(response.data);
      });
    },
    getName: function () {
      axios.get("https://dynamic-solar-system-app.herokuapp.com/name").then((response) => {
        this.name = response.data;
        console.log(response.data);
      });
    },
  },
};
</script>
