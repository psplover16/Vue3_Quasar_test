import { createRouter, createWebHistory } from "vue-router";
import index1 from "../views/index1.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: index1,
      redirect:"/AppFormA",
      children: [
        {
          path: "/AppFormA",
          name: "AppFormA",
          component: () => import("@/components/formA.vue"),
        },
        {
          path: "/markupTable",
          name: "markupTable",
          component: () => import("@/components/markupTable.vue"),
        },
      ]
    },

  ],
});

export default router;
