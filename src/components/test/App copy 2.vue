<template>
  <v-app id="app" class="vue-mainTempalte">
    <h2>APP.Vue</h2>
    <TestPage/>
  
    <router-view></router-view>
    
  </v-app>
</template>

<script>
import TestPage from './components/TestPage.vue'
export default {
  name: 'App',

  components: {

    // AllFeatures,
   
    TestPage
    // AddEpic,
    // StoryTable,
    // AddEpicPage,
    // AddStoryPage,
    
    // EpicTable,
    // AllFeaturePage
   

  },

  data: () => ({
    //
  }),
};

</script>