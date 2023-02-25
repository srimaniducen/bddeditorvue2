<template><!-- Left pane -->  <v-card 
  id="leftpane"
 
>  <v-list-item-icon
    style="font-size:20px;margin-left:10px;margin-top:30px;" class="text">          All Features
  </v-list-item-icon> <AllFeatureTree></AllFeatureTree>  </v-card></template><script>
import AllFeatureTree from '@/components/All/AllFeatureTree/AllFeatureTree.vue';
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
  z-index:1;
  position:fixed !important;
  height: 100% !important;
  width:16% !important;
  background-color:rgba(245, 245, 245, 7.452) !important;
}
</style>