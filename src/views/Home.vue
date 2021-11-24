<template>
  <div class="home">
    <!-- ======= Hero Section ======= -->
    <section id="hero" class="d-flex align-items-center">
      <div class="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
        <div class="row">
          <div class="col-lg-8">
            <h1>
              Welcome to
              <span>Dynamic Solar Systems</span>
            </h1>
            <h2>Create your worlds, your way.</h2>

            <div class="btns">
              <a href="#menu" class="btn-menu animated fadeInUp scrollto">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Hero -->
  </div>
</template>

<style scoped>
.home {
  color: whitesmoke;
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      systems: [],
    };
  },
  created: function () {
    this.indexSystems();
  },
  methods: {
    indexSystems: function () {
      axios.get("/systems").then((response) => {
        this.systems = response.data;
      });
    },
  },
};
</script>
