<template>
  <v-app>
    <v-app-bar
      app
      color="Ghost White"
      dark
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
        <span class="mr-2">BDD Editor</span>
      </div>
      
        <!-- <v-icon>mdi-open-in-new</v-icon> -->
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld/>
      <HomePage></HomePage>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import HomePage from './components/HomePage.vue';
export default {
  name: 'App',

  components: {
    HelloWorld,
    HomePage
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