<template>
  <v-container class="container" style="width:80%">
    <span><label class="label-style">Epic Title</label></span>
    <v-text-field
      v-model="title"
      outlined
      dense
    ></v-text-field>
    <label class="label-style">Description</label>
    <v-textarea
      v-model="description"
      outlined
      placeholder="Type a detailed description of your story here"
    ></v-textarea>
    <v-btn depressed color="primary" @click="saveData">
      <v-icon left>mdi-folder-open</v-icon>
      Save
    </v-btn>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: "AddEpicPage",

  data: () => ({
    title: "",
    description: "",
  }),

  methods: {
    saveData() {
   let headers = {
    "Content-Type": "application/json", 
    "Accept-Profile": 'fact',
    "Access-Control-Allow-Origin": "*",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidG9kb191c2VyIn0.RskCwt6fhwkSAAJKalDSDQhLJ4MBpzK7Rjr3lM_rXRs",
  }
   axios.post('http://10.0.1.70:3000/Epic', headers, 
    data).then(d => console.log(d)).catch(er=>console.log(er));
          console.log("Data saved successfully");
    
    },
  },
};
</script>

<style scoped>
.container {
  margin-left: 20%;
  margin-top: 5%;
}
.v-text-field {
  margin-top: 8px;
}
</style>
