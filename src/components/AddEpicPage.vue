'
'<template>
    <v-container class="container">
   <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-col class="col-style-22" >
               <span> <label class="label-style">Epic Title</label> </span>
                
                <v-text-field
                  outlined
                  dense
                  maxlength="72"
                 
                  class="text-box-style"
                  tabindex="4"
                 
                ></v-text-field>
                <label class="label-style">Description</label>
                    <v-textarea
                      outlined
                      maxlength="256"
                     placeholder="Type a detailed description of your story here"
                      class="desc-box"
                      height="85px"
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
              </v-col>
        </v-col>
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
