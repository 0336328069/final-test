import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => 
      import(/* webpackChunkName: "home" */ "../views/Home.vue"),  
  },
  {
    path: "/login",
    name: "Login",
    meta:{
      layout:"auth",
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
