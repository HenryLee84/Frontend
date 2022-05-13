import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/personalinfo',
      name: 'personalInfo',
      component: () => import('../views/PersonalInfo.vue')
    },
    {
      path: '/example',
      name: 'example',
      component: () => import('../views/ExamplePage.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginPage.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterPage.vue')
    }
  ]
});

export default router;
