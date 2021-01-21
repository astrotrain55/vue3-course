import { createRouter, createWebHistory } from 'vue-router';
import Tasks from '@/views/Tasks.vue';

const routes = [
  {
    path: '/',
    name: 'Tasks',
    component: Tasks,
  },
  {
    path: '/new',
    name: 'New',
    component: () => import(/* webpackChunkName: "new-page" */ '@/views/New.vue'),
  },
  {
    path: '/task/:id',
    name: 'Task',
    component: () => import(/* webpackChunkName: "task-page" */ '@/views/Task.vue'),
  },
  {
    path: '/:notFound(.*)',
    name: '404',
    component: () => import(/* webpackChunkName: "task-page" */ '@/views/PageNotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
});

export default router;
