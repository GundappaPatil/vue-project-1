import { createRouter, createWebHistory } from "vue-router";
import FruitShopHome from "../pages/FruitShopHome.vue"
import FruitShopLogin from "@/pages/FruitShopLogin.vue";
import FruitShopRegister from "@/pages/FruitShopRegister.vue";
import Calculator from "@/pages/Calculator.vue";



const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: "/",
        name: "login",
        component:FruitShopLogin
    },
    {
      path: "/home",
      name: "home",
      component: FruitShopHome,
    },

    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../pages/AboutView.vue"),
    },
    {
        path: "/register",
        name: "register",
        component:FruitShopRegister
    },
    {
      path:"/calculator",
      name:"calculator",
      component:Calculator
    }

    // {
    //   path: "/create",
    //   name: "create",
    //   component: Add,
    // },
    // {
    //   path: "/edit/:id",
    //   name: "edit",
    //   component: Edit,
    // },
  ],
});

export default router;
