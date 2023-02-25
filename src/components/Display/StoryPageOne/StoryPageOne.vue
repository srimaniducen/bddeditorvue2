<template>
  <v-container class="storypage">
    <span style="font-size: 20px;">Story 1
    <v-btn 
    style="margin-left:74.5%;margin-top:-7px;position:absolute;border-radius:9px;height:35px;color:#2B5AD9;background-color:white"
        dense 
        outlined   
        small
        href="/#/HomePage/EditStoryPage" 
        >   
        <v-icon small>fa fa-pencil</v-icon>&nbsp;
        Edit Story
    </v-btn>
    <v-divider></v-divider>
    <p class="text-wrap" contenteditable="true" style="width:130%;font-size: 18px;position:relative;margin-top:-5px;border:0px">Epic Title : Title of the epic will be shown  </p>
    <p contenteditable="true" style="font-size: 15px; margin-bottom: 40px;margin-top:-5px;">Description : Description of the epic will be shown style</p>
    <!-- <v-text-field flat solo value="Epic Title : Title of the epic will be shown" style="font-size: 18px;margin-top:-5px;"></v-text-field>
    <v-text-field flat solo value="Epic Title : Title of the epic will be shown" style="font-size: 15px;margin-top:-10px;"></v-text-field> -->

    
<ScenarioTable></ScenarioTable>
</span>
</v-container>
</template>

<style scoped>
[contenteditable] {
  outline: 0px solid transparent;
}
.theme--light.v-divider {
    border-color: rgba(0, 0, 0, 3.12);
     margin-top:5px; 
     width:93%;
}

.storypage{
  position:relative;
  top: 68px;
  margin-left: 18%;
}
</style>


<script>
import ScenarioTable from '@/components/DataTable/ScenarioTable/ScenarioTable.vue';
export default {
  components: {
    ScenarioTable
},
}
</script>