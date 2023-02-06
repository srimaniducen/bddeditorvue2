import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'






// Import Bootstrap and BootstrapVue CSS files (order is important)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";     //font-awesome
// import "../node_modules/bootstrap/dist/css/bootstrap.css";              // bootstrap css
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";            // bootstrap bundle js

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
