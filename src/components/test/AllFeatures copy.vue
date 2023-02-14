<template>
<!-- Left pane -->
  <v-card 
    class="d-inline-block " 
    id="leftpane"
    height= 100%
    width="256"  
    position="fixed"
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

element.style {
    height: 100%;
    width: 256px;
    background-color: rgb(245, 245, 245);
    border-color: rgb(245, 245, 245);
}
</style>
