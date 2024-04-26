import { createRouter, createWebHistory } from "vue-router";
import index1 from "../views/index1.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: index1,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/index1.vue"),
    },
  ],
});

export default router;
