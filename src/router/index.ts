import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
    meta: {
      title: "Inicio",
      showInNav: true,
    },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
    meta: {
      title: "Acerca de",
      showInNav: true,
    },
  },
  {
    path: "/clients",
    name: "clients",
    component: () => import("../views/ClientsView.vue"),
    meta: {
      title: "Clientes",
      showInNav: true,
    },
  },
  {
    path: "/products",
    name: "products",
    component: () => import("../views/ProductsView.vue"),
    meta: {
      title: "Productos",
      showInNav: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
