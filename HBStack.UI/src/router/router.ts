import { createMemoryHistory, createRouter } from "vue-router";
import HomeView from "../components/home/HomeView.vue";
import MainLayout from "../layouts/MainLayout.vue";

const routes = [{ path: "/", component: MainLayout }];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
