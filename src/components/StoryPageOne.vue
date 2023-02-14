<template>
  <v-container class="storypage">
    <span style="font-size: 20px;">Story 1
    <v-btn 
    style="margin-left:75%;margin-top:-1px;position:absolute"
        dense 
        outlined  
        color="primary"  
        small
        href="/#/HomePage/EditStoryPage" 
        >   
        <v-icon>fa fa-edit</v-icon>&nbsp;
        Edit Story
    </v-btn>
    <v-divider></v-divider>
    <p style="font-size: 18px;margin-top:-5px;">Story Title : Title of the Story will be shown</p>
    <p style="font-size: 15px;margin-top:-10px;">Description : Description of the Story will be shown</p>

    <v-text-field
      style="position:absolute;width:908px"
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
    style="margin-left:82%"
    small
    href="/#/HomePage/AddScenarioPage"
>
    <v-icon >
        mdi-plus
      </v-icon>
      Add Scenario
    </v-btn>
</div> 
<ScenarioTable></ScenarioTable>
</span>
</v-container>
</template>

<style scoped>
.theme--light.v-divider {
    border-color: rgba(0, 0, 0, 3.12);
     margin-top:2px; 
     width:94%;
}

.storypage{
  position:relative;
  top: 68px;
  margin-left: 20%;
}
</style>


<script>
import ScenarioTable from './ScenarioTable.vue';
export default {
  components: {
    ScenarioTable
},
}
</script>