import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from '@/components/Home/HomePage/HomePage.vue';
import FeatureTable from '@/components/DataTable/FeatureTable/FeatureTable.vue'
import AddFeature from '@/components/Add/AddFeature/AddFeature.vue';
import StoryTable from '@/components/DataTable/StoryTable/StoryTable.vue';
import AddFeaturePage from '@/components/Add/AddFeaturePage/AddFeaturePage.vue';
import AddStoryPage from '@/components/Add/AddStoryPage/AddStoryPage.vue';
import AllFeaturePage from '@/components/All/AllFeaturePage/AllFeaturePage.vue';
import AddScenarioPage from '@/components/Add/AddScenarioPage/AddScenarioPage.vue';
import AllFeatures from '@/components/All/AllFeatures/AllFeatures.vue';
import StoryPageOne from '@/components/Display/StoryPageOne/StoryPageOne.vue';
import FeaturePageOne from '@/components/Display/FeaturePageOne/FeaturePageOne.vue';
import EditFeaturePage from '@/components/Edit/EditFeaturePage/EditFeaturePage.vue';
import EditStoryPage from '@/components/Edit/EditStoryPage/EditStoryPage.vue';
import ScenarioTable from '@/components/DataTable/ScenarioTable/ScenarioTable.vue';
import ScenarioPageOne from '@/components/Display/ScenarioPageOne/ScenarioPageOne.vue';
import EditScenarioPage from '@/components/Edit/EditScenarioPage/EditScenarioPage.vue'

// import TestPage from './components/TestPage.vue';
// import TestPagee from './components/TestPagee.vue';
// import HelloWorld from './components/HelloWorld.vue';
// import HomePage from '@/components/HomePage";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,

  },

  {
    path: "/HomePage/AddFeaturePage",
    name: "AddFeaturePage",
    component: AddFeaturePage
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
    path: "/HomePage/AddFeature",
    name: "AddFeature",
    component: AddFeature
  },
  {
    path: "/HomePage/FeatureTable",
    name: "FeatureTable",
    component: FeatureTable
  },
  {
    path: "/HomePage/StoryTable",
    name: "StoryTable",
    component: StoryTable,

  },
  // {
  //   path: "/HomePage/RouterButtons",
  //   name: "RouterButtons",
  //   component: RouterButtons,

  // },
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
    path: "/HomePage/FeaturePageOne",
    name: "FeaturePageOne",
    component: FeaturePageOne,

  },
  {
    path: "/HomePage/EditFeaturePage",
    name: "EditFeaturePage",
    component: EditFeaturePage,

  },
  {
    path: "/HomePage/EditStoryPage",
    name: "EditStoryPage",
    component: EditStoryPage,

  },
  {
    path: "/HomePage/ScenarioTable",
    name: "ScenarioTable",
    component: ScenarioTable,

  },
  {
    path: "/HomePage/ScenarioPageOne",
    name: "ScenarioPageOne",
    component: ScenarioPageOne,

  },
  {
    path: "/HomePage/EditScenarioPage",
    name: "EditScenarioPage",
    component: EditScenarioPage,

  },
 
];




const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});


export default router;