<template>
  <div class="signup">
    <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Username:</label>
        <p></p>
        <input type="text" v-model="newUserParams.username" />
      </div>
      <p></p>
      <div>
        <label>Email:</label>
        <p></p>
        <input type="email" v-model="newUserParams.email" />
      </div>
      <p></p>
      <div>
        <label>Password:</label>
        <p></p>
        <input type="password" v-model="newUserParams.password" />
      </div>
      <p></p>
      <div>
        <label>Password confirmation:</label>
        <p></p>
        <input type="password" v-model="newUserParams.password_confirmation" />
        <p></p>
      </div>
      <input class="classy" type="submit" value="Sign-Up" />
    </form>
  </div>
</template>

<style scoped>
.signup {
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
      newUserParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
