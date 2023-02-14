<template>
  
  <v-app id="app">
    <router-view>

</router-view>
<router-link to="/"></router-link>
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
        href="http://localhost:8080/#/HomePage/AddEpic"
       
        text
      >
      <div class="align-left">
        <img :src="require('./assets/logo.png')"/>
        <span style="top:17px;left:165px;position:fixed;font-size: 15px;" class="mr-2">BDD-Editor</span>
        <v-icon style="top:14px;right:75px;position:fixed">far fa-user-circle</v-icon>
        <span style="top:18px;right:15px;position:fixed"> Admin</span>
        
      </div>
      
        <!-- <v-icon>mdi-open-in-new</v-icon> -->
      </v-btn>
    </v-app-bar>

    <v-main>
      
     
      
      
    </v-main>
    <AllFeatures></AllFeatures>
    <!-- <AddStoryPage></AddStoryPage> -->
    <!-- <DemoComponent></DemoComponent> -->
   <!-- <AddScenarioPage></AddScenarioPage>
   <TestPagee></TestPagee> -->
   <!-- <RouterButtons></RouterButtons> -->
  </v-app>

</template>

<script>
import AllFeatures from "./components/AllFeatures.vue"
// import AddStoryPage from "./components/AddStoryPage.vue"
// import DemoComponent from "./components/DemoComponent.vue"
// import AddScenarioPage from "./components/AddScenarioPage.vue"
// import TestPagee from "./components/TestPagee.vue"
// import RouterButtons from "./components/RouterButtons.vue"
export default {
  name: 'App',

  components: {
    // RouterButtons
   AllFeatures,
  //  AddStoryPage
  //  AddEpic,
  //  DemoComponent,
  //  AddScenarioPage,
  //  TestPagee,


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