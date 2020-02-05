import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Register from "../views/Register";
import Login from "@/views/Login"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/posts",
    name: "posts",
    component: () => import("../views/Blog.vue")
  },
  {
    path: "*",
    component: Home
  }
];

const router = new VueRouter({ mode: "history", routes: routes });

export default router;
