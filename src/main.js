import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import "two.js";

// http://localhost:3000
// https://dynamic-solar-system-app.herokuapp.com

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "https://dynamic-solar-system-app.herokuapp.com" : "/";
var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
