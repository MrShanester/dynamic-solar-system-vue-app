<template>
  <div id="app">
    <div id="nav">
      <header id="header" class="fixed-top d-flex align-items-cente">
        <div class="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
          <h1 class="logo me-auto me-lg-0"><a href="index.html">Dynamic Solar Systems</a></h1>
          <!-- Uncomment below if you prefer to use an image logo -->
          <!-- <a href="index.html" class="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

          <nav id="navbar" class="navbar order-last order-lg-0">
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
          <!-- .navbar -->
          <a href="/Login" class="book-a-table-btn scrollto d-none d-lg-flex">Log In</a>
        </div>
      </header>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  color: white;
}

#nav a {
  font-weight: bold;
  color: #c1c1c1;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

body {
  background-image: url(assets/webb-dark.png);
}
</style>
