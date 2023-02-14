<template>
  
  <v-app id="app">
<router-view />
    <v-app-bar
      app
      color="White"
      
    >
      <!-- <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div> -->

      <!-- <v-spacer></v-spacer> -->

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
      <div class="align-left">
        <img :src="require('./assets/ducenLogo.jpg')"/>
        <span style="top:17px;left:165px;position:fixed;font-size: 15px;" class="mr-2">BDD-Editor</span>
        <v-icon style="top:14px;right:75px;position:fixed">far fa-user-circle</v-icon>
        <span style="top:18px;right:15px;position:fixed"> Admin</span>
        
      </div>
      
        <!-- <v-icon>mdi-open-in-new</v-icon> -->
      </v-btn>
    </v-app-bar>

    <v-main>
      
      <!-- <AllFeatures></AllFeatures> -->
      <Testpagee></Testpagee>
      <TestPage></TestPage>
      
       <!-- <AddEpic></AddEpic>
       <AllFeaturePage></AllFeaturePage>
       <StoryTable></StoryTable>
       <AddEpicPage></AddEpicPage> -->
       <!-- <AddStoryPage></AddStoryPage> -->
       <!-- <EpicTable></EpicTable> -->
       
       <div>
        <button ><router-link to="/" class="navbar-brand">Home</router-link></button>
       </div>
      
      
    </v-main>
  </v-app>

</template>

<script>
// import AddEpic from './components/AddEpic';
import './style.css';
// import AllFeatures from './components/AllFeatures.vue';
// import AddEpic from './components/AddEpic.vue';
// import StoryTable from './components/StoryTable.vue';
// import AddEpicPage from './components/AddEpicPage.vue';
// import AddStoryPage from './components/AddStoryPage.vue'
import TestPage from './components/TestPage.vue'
// import EpicTable from './components/EpicTable.vue';
// import AllFeaturePage from './components/AllFeaturePage.vue'
import Testpagee from './components/TestPagee.vue'



export default {
  name: 'App',

  components: {

    // AllFeatures,
    Testpagee,
    TestPage,
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
<style scoped>
.topright {
  position: absolute;
  top: 8px;
  text-align: left !important;
  font-size: 18px;
}
</style>