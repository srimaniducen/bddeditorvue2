<template>
   <span class="addEpic">
    All Features<v-divider></v-divider>
      <v-text-field
      style="position:absolute;width:925px"
      outlined
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
        dense
      ></v-text-field> 
      
      <div class="button">
      <v-btn
   
      depressed
      color="primary"
      style="margin-left:69%"
      href="/#/HomePage/AddEpicPage"
    >
    <v-icon >
        mdi-plus
      </v-icon>
      Add Epic
    </v-btn>
  </div>
    <EpicTable></EpicTable>
    
</span>
</template>
<script>
import EpicTable from './EpicTable.vue';
export default {
  components: {
    EpicTable
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
}

.addEpic{
  position:relative;
  top: 78px;
  left: 21%;
}
</style>