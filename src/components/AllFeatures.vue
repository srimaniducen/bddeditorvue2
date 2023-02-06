<template>

  <v-card 
    class="d-inline-block " 
    height= 100%
    width="256"  
    color="rgba(245, 245, 245, 7.452)"
    
  >
  <v-list-item-icon
    style="font-size:20px;margin-left:10px;margin-top:30px;">        
          All Features
  </v-list-item-icon>
  <AllFeatureTree></AllFeatureTree>
  </v-card>

</template>
<script>
import AllFeatureTree from './AllFeatureTree.vue';
export default {
  name: 'AllFeatures',

  components: {

   AllFeatureTree

  },

  data: () => ({
    //
  }),
};


</script>


<style>
.v-sheet.v-card {
    margin-right: 695px;
    margin-top: -22px;
}
.v-list-item-icon{
  top:20px;
}
</style>
