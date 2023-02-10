import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from '../components/HomePage.vue';
import EpicTable from "../components/EpicTable.vue";
import AddEpic from '../components/AddEpic.vue';
import StoryTable from '../components/StoryTable.vue';
import AddEpicPage from '../components/AddEpicPage.vue';
import AddStoryPage from '../components/AddStoryPage.vue';
import AllFeaturePage from '../components/AllFeaturePage.vue';
import RouterButtons from '../components/RouterButtons.vue';
import AddScenarioPage from '../components/AddScenarioPage.vue';
import AllFeatures from '../components/AllFeatures.vue';
import StoryPageOne from "../components/StoryPageOne.vue"
import EpicPageOne from "../components/EpicPageOne.vue"
// import TestPage from './components/TestPage.vue';
// import TestPagee from './components/TestPagee.vue';
// import HelloWorld from './components/HelloWorld.vue';
// import HomePage from "../components/HomePage";


Vue.use(VueRouter);

const routes = [
  {
    path: "/HomePage",
    name: "HomePage",
    component: HomePage,

  },

  {
    path: "/HomePage/AddEpicPage",
    name: "AddEpicPage",
    component: AddEpicPage
  },
  
  {
    path: "/HomePage/AddStoryPage",
    name: "AddStoryPage",
    component: AddStoryPage
  },


  {
    path: "/HomePage/AllFeaturePage",
    name: "AllFeaturePage",
    component: AllFeaturePage
  },
  {
    path: "/HomePage/AddEpic",
    name: "AddEpic",
    component: AddEpic
  },
  {
    path: "/HomePage/EpicTable",
    name: "EpicTable",
    component: EpicTable
  },
  {
    path: "/HomePage/StoryTable",
    name: "StoryTable",
    component: StoryTable,

  },
  {
    path: "/HomePage/RouterButtons",
    name: "RouterButtons",
    component: RouterButtons,

  },
  {
    path: "/HomePage/AddScenarioPage",
    name: "AddScenarioPage",
    component: AddScenarioPage,

  },
  {
    path: "/HomePage/AllFeatures",
    name: "AllFeatures",
    component: AllFeatures,

  },
  {
    path: "/HomePage/StoryPageOne",
    name: "StoryPageOne",
    component: StoryPageOne,

  },
  {
    path: "/HomePage/EpicPageOne",
    name: "EpicPageOne",
    component: EpicPageOne,

  },
];
   



const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});

export default router;