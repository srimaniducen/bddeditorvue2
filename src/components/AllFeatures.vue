<template><!-- Left pane -->  <v-card 
  id="leftpane"
 
>  <v-list-item-icon
    style="font-size:20px;margin-left:10px;margin-top:30px;">          All Features
  </v-list-item-icon> <AllFeatureTree></AllFeatureTree>  </v-card></template><script>
import AllFeatureTree from './AllFeatureTree.vue';
export default {
components: {
 AllFeatureTree
},
data: () => ({
  //
}),
};


</script>
<style>
#leftpane{
  position:fixed !important;
  height: 100% !important;
  width:20% !important;
  background-color:rgba(245, 245, 245, 7.452) !important;
}
</style>