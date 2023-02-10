'
'<template>
   <v-card class="card">
    <v-container>
      <v-row >
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field> 
      
      <div>
      <v-btn
   
      depressed
      color="primary"
    >
    <v-icon left>
        mdi-plus
      </v-icon>
      Add Epic
      
      
      
    </v-btn>
  </div>
    </v-row>
    
    </v-container>
  </v-card>
</template>
<script>
export default {
  name: "AddEpicPage",

  components: {


  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.card{
  position:relative;
  top: 70px;
  margin-left: 5;
}
</style>