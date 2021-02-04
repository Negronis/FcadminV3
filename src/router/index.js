import { createRouter, createWebHistory } from 'vue-router';
import routerArray from './routers';
import initGuard from './guard';
const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: routerArray
})
initGuard(router);
export default router;