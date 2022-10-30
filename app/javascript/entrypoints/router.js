import { createWebHistory, createRouter } from 'vue-router';
import Home from './views/Index.vue';
import About from './views/About.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';

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
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
