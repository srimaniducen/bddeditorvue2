import Vue from "vue";
import VueRouter from "vue-router";
import {createRouter, createWebHistory} from "vue-router";
// import AddEpicPage from '../components/AddEpicPage'
import router from './router'
import TestPage from '@/components/TestPage.vue';
import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import Router from 'vue-router'
Vue.component('Dialog', Dialog);
Vue.use(PrimeVue);



Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/testPage',
      name: 'testPage',
      component: TestPage
    }
  ]
})




