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
      const url = 'https://localhost:7013/api/Feature';
      const data = {
        featureTitle: this.title,
        featureDescription: this.description
      };
      let axiosConfig = {
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
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
