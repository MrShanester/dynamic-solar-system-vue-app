import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import Example from "../views/Example.vue";
import SystemIndex from "../views/SystemIndex.vue";
import NewSystem from "../views/NewSystem.vue";
import SystemShow from "../views/SystemShow.vue";
import SystemEdit from "../views/SystemEdit.vue";
import PlanetShow from "../views/PlanetShow.vue";
import NewPlanet from "../views/NewPlanet.vue";
import PlanetEdit from "../views/PlanetEdit.vue";
import NewStar from "../views/NewStar.vue";
import Orrery from "../views/Orrery.vue";

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
  {
    path: "/systems/:id",
    name: "SystemShow",
    component: SystemShow,
  },
  {
    path: "/systems/:id/edit",
    name: "SystemEdit",
    component: SystemEdit,
  },
  {
    path: "/planets/:id",
    name: "PlanetShow",
    component: PlanetShow,
  },
  {
    path: "/NewPlanet/:id",
    name: "NewPlanet",
    component: NewPlanet,
  },
  {
    path: "/planets/:id/edit",
    name: "PlanetEdit",
    component: PlanetEdit,
  },
  {
    path: "/NewStar/:id",
    name: "NewStar",
    component: NewStar,
  },
  {
    path: "/Orrery/:id",
    name: "Orrery",
    component: Orrery,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
