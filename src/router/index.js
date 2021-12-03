import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import Example from "../views/Example.vue";
import SystemIndex from "../views/SystemIndex.vue";
import NewSystem from "../views/NewSystem.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Logout",
    name: "Logout",
    component: Logout,
  },
  {
    path: "/Example",
    name: "Example",
    component: Example,
  },
  {
    path: "/SystemIndex",
    name: "SystemIndex",
    component: SystemIndex,
  },
  {
    path: "/NewSystem",
    name: "NewSystem",
    component: NewSystem,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
