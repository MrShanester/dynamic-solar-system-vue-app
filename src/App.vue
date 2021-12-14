<template>
  <div id="app">
    <div id="nav">
      <header id="header" class="fixed-top d-flex align-items-cente">
        <div class="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
          <h1 class="logo me-auto me-lg-0 text-left"><a href="index.html">Dynamic Solar Systems</a></h1>
          <!-- Uncomment below if you prefer to use an image logo -->
          <!-- <a href="index.html" class="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

          <nav id="navbar" class="navbar order-last order-lg-0">
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
          <!-- .navbar -->
          <div v-if="isLoggedIn()">
            <a href="/Logout" class="book-a-table-btn scrollto d-none d-lg-flex">Log Out</a>
            <p></p>
            <a href="/" class="book-a-table-btn scrollto d-none d-lg-flex">Home</a>
          </div>
        </div>
      </header>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
/* #header {
  background-image: url("./assets/webb-dark.png");
} */
</style>

<script>
export default {
  data: function () {
    return {
      flashMessage: "",
    };
  },
  methods: {
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    reload: function () {
      location.reload();
    },
  },
};
</script>
