<template>
  <v-data-table id="epic"
    v-model="selected"
    :headers="headers"
    :items="desserts"
    :single-select="singleSelect"
    item-key="name"
    show-select
    class="elevation-1"
  >


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
            text: 'Epic Title',
            align: 'start',
            sortable: false,
            value: 'name',
         
          },
          { text: 'Description', value: 'Description' },
          
          
        ],
        desserts: [
          {
            name: 'Epic 1',
            Description: 159,
          
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

</style>