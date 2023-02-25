<template>
  <v-container class="container" style="width:80%">
    <span><label class="label-style">Epic Title</label></span>
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
import axios from 'axios';

export default {
  name: "AddEpicPage",
  data: () => ({
    title: "",
    description: "",
  }),
  methods: {
    saveEpic() {
      // Send a POST request to save the epic to the server
      axios
        .post("http://10.0.1.70:3000/Epic", {
          title: this.EpicTitle,
          description: this.EpicDescription,
        })
        .then((response) => {
          // Handle the success response
          console.log("Feature saved successfully:", response.data);
          // Clear the form inputs
          this.EpicTitle = "";
          this.EpicDescription = "";
        })
        .catch((error) => {
          // Handle the error response
          console.error("Error saving epic:", error);
        });
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
