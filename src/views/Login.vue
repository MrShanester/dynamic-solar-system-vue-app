<template>
  <div class="login">
    <form v-on:submit.prevent="submit()">
      <h1>Login</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Email:</label>
        <p></p>
        <input type="email" v-model="newSessionParams.email" />
      </div>
      <p></p>
      <div>
        <label>Password:</label>
        <p></p>
        <input type="password" v-model="newSessionParams.password" />
      </div>
      <p></p>

      <input class="classy" type="submit" value="Log In" />
      <p></p>
      <label>Or</label>
      <p>Sign Up if you don't have an account:</p>
      <p></p>

      <button v-on:click="signUp()" class="classy">Take me to Sign-Up</button>
    </form>
  </div>
</template>

<style scoped>
.login {
  margin-top: 125px;
  text-align: center;
  color: whitesmoke;
}
.classy {
  border: 2px solid #645ad4;
  border-radius: 50px;
  background: #201f21;
  color: #fff;
  font-family: "Open Sans", sans-serif;
}
.classy:hover {
  background: #645ad4;
  color: #fff;
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);

          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
    signUp: function () {
      this.$router.push("/Signup");
    },
  },
};
</script>
