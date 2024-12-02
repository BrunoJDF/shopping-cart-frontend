import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ClientsView from "@/views/ClientsView.vue";
import ProductsView from "@/views/ProductsView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/clients",
    name: "clients",
    component: async () => ClientsView,
  },
  {
    path: "/products",
    name: "products",
    component: async () => ProductsView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
