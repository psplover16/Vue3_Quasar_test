import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import { getToken } from "@/utils/cookie.js";
import index1 from "../views/index1.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: index1,
      redirect: "/AppFormA",
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
router.beforeEach((to, from) => {
  // 路由跳轉前觸發
  if (to.meta.auth) {
    // 檢查cookuie
    console.log(from.name);
    console.log(to);
    if (!getToken()) {
      console.log(from.name);
      return false;
    }
  }
});
export default router;
