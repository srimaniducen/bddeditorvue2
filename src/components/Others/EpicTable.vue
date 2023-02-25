<template>
  <span>
    <v-text-field
      style="position:absolute;width:925px;z-index:1"
      
      outlined
        v-model="search"
        label="Search"
        single-line
        hide-details
        dense
      ></v-text-field> 
      
      <div class="button">
      <v-btn
      small
      depressed     
      style="margin-left:69%;border-radius:9px;height:35px;background-color:#2B5AD9;color:white;margin-top:-4px"
      href="/#/HomePage/AddFeaturePage"
    >
    <v-icon small color="white">
        fa-thin fa-plus
      </v-icon>&nbsp;
      Add Feature
    </v-btn>
  </div>
  <v-data-table id="epic"
  :page.sync="page"
  v-model="selected"
    :headers="headers"
    :search="search"
    :items="desserts"
    :single-select="singleSelect"
    item-key="name"
    show-select
    class="elevation-1"
    :value="value"
  >
  <template v-slot:[`footer.page-text`]> 
  <v-pagination
      v-model="page"
      :length="6"
    ></v-pagination>
  </template>
  </v-data-table>
  </span>
</template>

<script>

  export default {
    
    data () {
      return {
        page:1,
        singleSelect: false,
        selected: [],
        search:'',
        headers: [
          {
            text: 'Feature Title',
            align: 'start',
            sortable: false,
            value: 'name',
            class: "grey lighten-2"         
          },
          { text: 'Description', value: 'Description',class: "grey lighten-2" },
          
          
        ],
        desserts: [
          {
            name: 'Feature 1',
            Description: 159,
          
          },
          {
            name: 'Epic 2',
            Description: 237,
          },
          {
            name: 'Epic 2',
            Description: 237,
          },
          {
            name: 'Epic 2',
            Description: 237,
          },
          {
            name: 'Epic 2',
            Description: 237,
          },
          {
            name: 'Epic 2',
            Description: 237,
          },
          {
            name: 'Epic 2',
            Description: 237,
          },
          {
            name: 'Epic 2',
            Description: 237,
          },
          {
            name: 'Epic 2',
            Description: 237,
          },
          {
            name: 'Epic 2',
            Description: 237,
          },
        ],
      }
    },
  }
</script>
<style scoped>
#epic{
  z-index:1;
  width:78%;
  position: absolute;
  top: 110px;
}
th.text-start {
    background-color: blue !important;
}
</style>