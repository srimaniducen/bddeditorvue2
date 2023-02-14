<template>  
    <v-data-table id="scenarioTable"
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
    <span> <input type="radio" class="status3" value="Yet to start" > Yet to start</span>
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
  </template>
  <script>
  
    export default {
      data () {
        return {
          singleSelect: false,
          selected: [],
          headers: [
            {
              text: 'Title',
              align: 'start',
              sortable: false,
              value: 'name',
           
            },
            {text: 'Tags', value: 'Tags'},
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
    width:92%;
    margin-top:16px;
    position:relative;
  }
  
  </style>