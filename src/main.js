import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import router from "./router";
import VueRouter from "vue-router";
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

//import { component } from "vue/types/umd";

Vue.use(VueRouter);
// import PrimeVue from 'primevue/config'  // import PrimeVue
import HomePage from '@/components/HomePage.vue';
// import CSS resources
import 'primevue/resources/primevue.min.css'            // core 
import 'primevue/resources/themes/saga-blue/theme.css'  // theme
import 'primeicons/primeicons.css'                      // icons
import '/node_modules/primeflex/primeflex.css'          // PrimeFlex

// import Button from 'primevue/button'  // import Button component




// Import Bootstrap and BootstrapVue CSS files (order is important)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)

Vue.component("HomePage",HomePage);
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";     //font-awesome
// import "../node_modules/bootstrap/dist/css/bootstrap.css";              // bootstrap css
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";            // bootstrap bundle js

Vue.config.productionTip = false

new Vue({
  vuetify,
  HomePage,
  router,
  render: h => h(App)
}).$mount('#app')
