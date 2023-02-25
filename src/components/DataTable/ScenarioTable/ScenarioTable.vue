<template> 
<span style="margin-top:20px">   

  <v-text-field
      style="position:absolute;width:885px;margin-top:-20px"
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
    style="margin-left:80%;margin-top:-46px;border-radius:9px;height:35px;background-color:#2B5AD9;color:white"
    small
    href="/#/HomePage/AddScenarioPage"
>
    <v-icon >
        mdi-plus
      </v-icon>
      Add Scenario
    </v-btn>
</div> 

    <v-data-table id="scenarioTable"
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
    <template v-slot:[`item.Tags`]="{ item }" >
        <v-chip
        color="black"
        label
        outlined
        >
          {{ item.Tags }}
        </v-chip>      
      </template>
  
      <template v-slot:[`item.Prioritize`]="{ item }" >
        <v-icon
          small
          class="mr-2"
          @click="item"
        >
          fa fa-level-up
        </v-icon>     
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
              text: 'Title',
              align: 'start',
              sortable: false,
              value: 'name',
              class: "grey lighten-2"
           
            },
            {text: 'Tags', value: 'Tags',sortable: false,class: "grey lighten-2"},
          ],
          desserts: [
            {
              name: 'Scenario 1',
              Tags:'Tags'
            },
            {
              name: 'Scenario 2',
              Tags:'Tags'
            },
            {
              name: 'Scenario 2',
              Tags:'Tags'
            },
            {
              name: 'Scenario 2',
              Tags:'Tags'
            },
            {
              name: 'Scenario 2',
              Tags:'Tags'
            },
            {
              name: 'Scenario 2',
              Tags:'Tags'
            },
            {
              name: 'Scenario 2',
              Tags:'Tags'
            },
            {
              name: 'Scenario 2',
              Tags:'Tags'
            },
            
          ],
        }
      },
    }
  </script>
  <style scoped>
  .status3:checked:after {
       /* margin-left: 2px; */
      margin-bottom: 5px;
         width:13px;
      height:13px;
          border-radius: 15px;
          position: relative;
          background-color: #4B0082;
          content: '';
          display: inline-block;
          visibility: visible;
      }
  #scenarioTable{
    width:93%;
    margin-top:16px;
    position:relative;
  }
  
  </style>