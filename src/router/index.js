import VueRouter from "vue-router";
import {createRouter, createWebHistory} from "vue-router";
import Vue from "vue";
import AddEpicPage from '../components/AddEpicPage'
import router from './router'



Vue.use(VueRouter);

export const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'AddEpicPage',
        redirect:'/AddEpicPage',
        component: AddEpicPage
      },
      {
        path: '/AddEpicPage',
        name: 'AddEpicPage',
        component: AddEpicPage
      },
    ]
  });
export default router;