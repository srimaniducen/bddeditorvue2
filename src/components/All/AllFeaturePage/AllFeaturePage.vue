<template>
   <span class="addEpic">
   <p class="text"> All Features</p><v-divider></v-divider>
      
    <FeatureTable></FeatureTable>
    
</span>
</template>
<script>
import FeatureTable from '@/components/DataTable/FeatureTable/FeatureTable.vue';
export default {
  components: {
    FeatureTable
},
  name: "AddEpicPage",

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.theme--light.v-divider {
    border-color: rgba(0, 0, 0, 1.12);
    width:78%;
}

.addEpic{
  position:relative;
  top: 78px;
  left: 19%;
}
</style>