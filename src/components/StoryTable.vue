<template>
  
  <v-data-table id="container"
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
    <!-- <template v-slot:top>
      <v-switch
        v-model="singleSelect"
        label="Single select"
        class="pa-3"
      ></v-switch>
    </template> -->
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
          { text: 'Tags', value: 'Tags' },
          { text: 'Prioritize', value: 'Prioritize' },
        ],
        desserts: [
          {
            name: 'Story 1',
            Status: 159,
            Points: 6.0,
            Assigned: "Srimanikandan",
            Tags: 4.0,
            Prioritize: 1,
          },
          {
            name: 'Story 2',
            Status: 237,
            Points: 9.0,
            Assigned: "manikandan",
            Tags: 4.3,
            Prioritize: 1,
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

#container{
  position: absolute;
  top: 90px;
  margin-left: 30%;
}

</style>