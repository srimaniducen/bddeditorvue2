<template>
    <v-container class="container">
   
          
               <span> <label class="text">Feature Title</label> </span> 
                
                <v-text-field
                
                  outlined
                  dense
                  value="BDD Epic"
                ></v-text-field> 
                <label class="text">Description</label>
                    <v-textarea
                      outlined
                     placeholder="Type a detailed description of your story here"
                     value="BDD Description"
                    ></v-textarea>
                    <v-btn
      depressed
      style="border-radius:9px;height:35px;background-color:#2B5AD9;color:white"
    >
    <v-icon left>
        fa fa-save
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
  margin-left:18%;
  margin-top:5%;
  width:80%
}
.v-text-field{
        margin-top:8px;
    }
</style>
