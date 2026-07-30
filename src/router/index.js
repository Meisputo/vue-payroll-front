import { createRouter, createWebHistory } from "vue-router";
import { components } from "vuetify/dist/vuetify.js";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/Home.vue"),
  },
  {
    path: "/dash",
    name: "Dashboard",
    component: () => import("@/components/Dashboard.vue"),
  },
  {
    path: "/emps",
    name: "Employees",
    component: () => import("@/pages/Employeelist.vue"),
  },
  {
    path: "/addemps",
    name: "AddEmployee",
    component: () => import("@/pages/AddEmployee.vue"),
  },
  {
    path: "/department",
    name: "Department",
    component: () => import("@/pages/Department.vue"),
  },
  {
    path: "/positions",
    name: "Positions",
    component: () => import("@/pages/Positions.vue"),
  },
  {
    path: "/empstat",
    name: "Empstatus",
    component: () => import("@/pages/EmployStatus.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
