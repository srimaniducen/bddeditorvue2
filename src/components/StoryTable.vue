<template>  
  <v-data-table id="margin"
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
          { text: 'Status', value: 'Yet to start' },
          { text: 'Points', value: 'Points' },
          { text: 'Assigned', value: 'Assigned' },
          {text: 'Tags', value: 'Tags'},
          {text:'Prioritize', value:'Prioritize'},
        ],
        desserts: [
          {
            name: 'Story 1',
            Status: 159,
            Points: 6.0,
            Assigned: "Srimanikandan",
            Tags:'Tags',
            Prioritize:'<v-icon>fa fa-trash></v-icon>'
          },
          {
            name: 'Story 2',
            Status: 237,
            Points: 9.0,
            Assigned: "Manoj Gunupudi",
            Tags:'Tags',
            Prioritize:'<v-icon>fa fa-trash></v-icon>'
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
#margin{
  min-width:130%;
  margin-top:16px;
  position:relative;
}

</style>