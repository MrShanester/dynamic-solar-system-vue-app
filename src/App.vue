<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/Signup">Sign-Up</router-link>
      |
      <router-link to="/Login">Log In</router-link>
      |
      <router-link to="/Logout">Log Out</router-link>
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
