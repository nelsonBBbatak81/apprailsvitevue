import { createWebHistory, createRouter } from 'vue-router';
import Home from './views/Index.vue';
import About from './views/About.vue';

const routes = [
  {
    path: '/',
    alias: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
