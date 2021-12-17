<template>
  <div class="signup">
    <div class="flex-container">
      <div class="content-container">
        <div class="form-container">
          <div class="form-container">
            <form v-on:submit.prevent="submit()">
              <h1>
                Sign
                <span class="cool">up</span>
              </h1>
              <br />
              <ul>
                <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
              </ul>
              <div>
                <span class="subtitle">USERNAME:</span>
                <p></p>
                <input type="text" v-model="newUserParams.username" />
              </div>
              <p></p>
              <div>
                <span class="subtitle">EMAIL:</span>
                <p></p>
                <input type="email" v-model="newUserParams.email" />
              </div>
              <p></p>
              <div>
                <span class="subtitle">PASSWORD:</span>
                <p></p>
                <input type="password" v-model="newUserParams.password" />
              </div>
              <p></p>
              <div>
                <span class="subtitle">PASSWORD CONFIRMATION:</span>
                <p></p>
                <input type="password" v-model="newUserParams.password_confirmation" />
                <p></p>
              </div>
              <input class="classy" type="submit" value="Sign-Up" />
            </form>
          </div>
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

.signup {
  margin-top: 150px;
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

.form-container {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 500px;
  height: 700px;

  margin-top: 5px;
  padding-top: 20px;

  border-radius: 12px;

  display: flex;
  justify-content: center;
  flex-direction: column;

  background: #1f1f1f;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.199);
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
