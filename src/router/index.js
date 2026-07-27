import { createRouter, createWebHistory } from "vue-router";
import { components } from "vuetify/dist/vuetify.js";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/components/Home.vue"),
  },
  {
    path: "/dash",
    name: "Dashboard",
    component: () => import("@/components/Dashboard.vue"),
  },
  {
    path: "/emps",
    name: "Employees",
    component: () => import("@/components/Employeelist.vue"),
  },
  {
    path: "/addemps",
    name: "AddEmployee",
    component: () => import("@/components/AddEmployee.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
