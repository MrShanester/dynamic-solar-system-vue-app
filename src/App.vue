<template>
  <div id="app">
    <div id="nav">
      <header id="header" class="fixed-top d-flex align-items-cente">
        <div class="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
          <h1 class="logo me-auto me-lg-0 text-left"><a href="index.html">Dynamic Solar Systems</a></h1>
          <!-- Uncomment below if you prefer to use an image logo -->
          <!-- <a href="index.html" class="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

          <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>
              <li><a class="nav-link scrollto" href="/"></a></li>
              <li><a class="nav-link scrollto" href="/"></a></li>
              <li><a class="nav-link scrollto" href="/"></a></li>
              <li><a class="nav-link scrollto" href="/"></a></li>
              <li><a class="nav-link scrollto" href="/"></a></li>
              <li><a class="nav-link scrollto" href="/"></a></li>
              <li><a class="nav-link scrollto" href="/"></a></li>
              <li><a class="nav-link scrollto" href="/"></a></li>
              <li><a class="nav-link scrollto" href="/"></a></li>
              <li><a class="nav-link scrollto" href="/"></a></li>
              <li><a class="nav-link scrollto" href="/"></a></li>
              <li><a class="nav-link scrollto" href="/"></a></li>
              <li><a class="nav-link scrollto" href="/"></a></li>
              <li><a class="nav-link scrollto" href="/"></a></li>
              <li><a class="nav-link scrollto" href="/"></a></li>
              <li><a class="nav-link scrollto" href="/"></a></li>
              <li><a class="nav-link scrollto" href="/"></a></li>
              <li><a class="nav-link scrollto" href="/"></a></li>
              <li><a class="nav-link scrollto" href="/"></a></li>
              <li><a class="nav-link scrollto" href="/"></a></li>
              <li><a class="nav-link scrollto" href="/"></a></li>

              <li><a id="fixme" class="fixmebutton" href="/">Home Page</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
          <!-- .navbar -->
          <div v-if="isLoggedIn()">
            <a href="/Logout" class="book-a-table-btn scrollto d-none d-lg-flex">Log Out</a>
          </div>
        </div>
      </header>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
.fixmebutton {
  margin: 0 0 0 15px;
  border: 2px solid #645ad4;
  color: #fff;
  border-radius: 50px;
  padding: 8px 25px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 1px;
  transition: 0.3s;
}
.fixmebutton:hover {
  background: #645ad4;
  color: #fff;
}
@media (max-width: 992px) {
  .book-a-table-btn {
    margin: 0 15px 0 0;
    padding: 8px 20px;
    text-align: center;
  }
}
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
