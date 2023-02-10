import Vue from "vue";
import VueRouter from "vue-router";


//import { component } from "vue/types/umd";

Vue.use(VueRouter);
import HomePage from "../components/HomePage";
import EpicTable from "../components/EpicTable.vue";



// const routes = [
//   { path: '',
//   name: "HomePage",
//     component: HomePage
//   },
//   {
//     path: "/HomePage",
//     name: "HomePage",
//     component: HomePage
//   },
//   {
//     path: "/EpicTable",
//     name: "EpicTable",
//     component: EpicTable,
//   },
//   {
//     path: "/TestPage",
//     name: "TestPage",
//     component: TestPage,
//   }
 
      
      

//     ];
 
const 
 
routes = [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/EpicTable',
      
      component: EpicTable,
    },
   
    
  ];

  const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
  });

export default router;