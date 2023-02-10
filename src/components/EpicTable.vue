<template>
  <v-data-table id="container"
    v-model="selected"
    :headers="headers"
    :items="desserts"
    :single-select="singleSelect"
    item-key="name"
    show-select
    class="elevation-1"
  >
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
#container{
  position: absolute;
  top: 90px;
  margin-left: 30%;
}
</style>