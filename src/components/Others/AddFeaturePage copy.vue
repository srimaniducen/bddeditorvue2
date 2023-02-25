<template>
  <v-container class="container" style="width:80%">
    <span> <label class="label-style">Feature Title</label> </span>
    <v-text-field outlined dense v-model="title"></v-text-field>
    <label class="label-style">Description</label>
    <v-textarea outlined placeholder="Type a detailed description of your story here" v-model="description"></v-textarea>
    <v-btn depressed color="primary" @click="saveEpic">
      <v-icon left>
        mdi-folder-open
      </v-icon>
      Save
    </v-btn>
  </v-container>
</template>

<script>
import VueToast from 'vue-toast-notification';
import Vue from 'vue';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(VueToast, {
    // One of the options
    position: 'top-right',
    // type: 'error',
});
import axios from 'axios';

export default {
  name: "AddFeaturePage",

  data: () => ({
    title: '',
    description: ''
  }),

  methods: {
    saveEpic() {
      const url = 'http://10.0.1.70:3000/Epic';
      const data = {
        EpicTitle: this.title,
        EpicDescription: this.description
      };
      let axiosConfig = {
        headers :{
    "Content-Type": "application/json", 
    "Content-Profile": 'fact',
    "Access-Control-Allow-Origin": "*",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidG9kb191c2VyIn0.RskCwt6fhwkSAAJKalDSDQhLJ4MBpzK7Rjr3lM_rXRs",
  }   
      };
      axios.post(url, data,axiosConfig)
        .then(response => {
          console.log('Feature saved:', response.data);
         Vue.$toast.open('Feature Saved Successfully!');
        })
        .catch(error => {
          console.error('Failed to save Feature:', error);
        });
    }
  }
};
</script>

<style scoped>
.container{
  margin-left:20%;
  margin-top:5%;
}
.v-text-field{
  margin-top:8px;
}
</style>
