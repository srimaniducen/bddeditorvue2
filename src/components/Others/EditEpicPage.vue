<template>
    <v-container class="container" style="width:80%">
   
          
               <span> <label class="label-style">Epic Title</label> </span> 
                
                <v-text-field
                
                  outlined
                  dense
                  value="BDD Epic"
                ></v-text-field> 
                <label class="label-style">Description</label>
                    <v-textarea
                      outlined
                     placeholder="Type a detailed description of your story here"
                     value="BDD Description"
                    ></v-textarea>
                    <v-btn
      depressed
      color="primary"
    >
    <v-icon left>
        mdi-folder-open
      </v-icon>
      Save
      
      
    </v-btn>
              
    </v-container>
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
.container{
  margin-left:20%;
  margin-top:5%;
}
.v-text-field{
        margin-top:8px;
    }
</style>
