<template >
    <div> 
    <span style="font-size: 20px;width:80%;margin-top:-11px;margin-left:13px;" class="bar-item">Feature 1
    <v-btn 
    class="edit" 
    small
        dense 
        outlined  
        color="primary"   
        style="margin-top:3px;margin-left:65%;position:absolute"
        href="/#/HomePage/EditEpicPage"
        >   
        <v-icon>fa fa-edit</v-icon>&nbsp;
        Edit Feature
    </v-btn>
    <v-divider></v-divider>
    <p style="font-size: 18px;position:absolute;margin-top:20px;">Feature Title : Title of the Feature will be shown</p>
    <p style="font-size: 15px;margin-top:50px;">Description : Description of the Feature will be shown</p>
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
    style="margin-left:115%"
    href="/#/HomePage/AddStoryPage"
    small
>
    <v-icon >
        mdi-plus
      </v-icon>
      Add Story
    </v-btn>
</div> 
    
<StoryTable></StoryTable>
</span>
</div>
</template>

<script>
import StoryTable from './StoryTable.vue';
export default {
  components: {
    StoryTable
},
}
</script>

<style scoped>
.theme--light.v-divider {
    border-color: rgba(0, 0, 0, 3.12);
    width:78%;
    position:absolute;
    margin-top:7px;
}
.edit{
    margin-left:870px;
}
.bar-item {
    padding-left: 20%;
    padding-top: 7%;
    display:block;
}
</style>