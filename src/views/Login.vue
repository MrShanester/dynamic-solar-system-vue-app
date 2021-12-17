<template>
  <div class="login">
    <div class="flex-container">
      <div class="content-container">
        <div class="form-container">
          <form v-on:submit.prevent="submit()">
            <h1>
              Log
              <span class="cool">in</span>
            </h1>
            <br />
            <br />
            <p></p>
            <ul>
              <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
            </ul>
            <div>
              <p></p>
              <span class="subtitle">EMAIL:</span>
              <p></p>
              <input type="email" v-model="newSessionParams.email" />
            </div>
            <p></p>
            <div>
              <span class="subtitle">PASSWORD:</span>
              <p></p>
              <input type="password" v-model="newSessionParams.password" />
            </div>
            <br />
            <br />

            <button class="submit-btn" v-on:click="submit()">Log In</button>
            <br />

            <br />

            <button class="submit-btn" v-on:click="signUp()">Sign-Up</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-family: "Poppins", sans-serif;
}

.cool {
  color: #645ad4;
}

.login {
  margin-top: 125px;
  text-align: center;
  color: whitesmoke;
}
.classy {
  border: 2px solid #645ad4;
  border-radius: 75px;
  width: 80px;
  height: 80px;
  background: #201f21;
  color: #fff;
  font-family: "Open Sans", sans-serif;
}
.classy:hover {
  background: #645ad4;
  color: #fff;
}
html {
  scroll-behavior: smooth;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
