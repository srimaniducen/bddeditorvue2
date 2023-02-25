<template >
    <div> 
    <span class="bar-item">Feature 1
    <v-btn 
    class="edit" 
    small
        dense 
        outlined     
        style="margin-top:-4px;margin-left:61.7%;position:absolute;border-radius:9px;height:35px;color:#2B5AD9;background-color:white"
        href="/#/HomePage/EditFeaturePage"
        >   
        <i class="fa fa-pencil"></i>&nbsp;
        Edit Feature
    </v-btn>
    <v-divider></v-divider>
    <p class="text-wrap" contenteditable="true" style="width:130%;font-size: 18px;margin:14px 0px;">Feature Title : Title of the Feature will be shown  </p>
    <p contenteditable="true" style="font-size: 15px; margin-bottom: 40px;">Description : Description of the Feature will be shown style</p>
    
<StoryTable></StoryTable>
</span>
</div>
</template>

<script>
import StoryTable from '@/components/DataTable/StoryTable/StoryTable.vue';
export default {
  components: {
    StoryTable
},
}
</script>

<style scoped>
[contenteditable] {
  outline: 0px solid transparent;
}
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
    padding-left: 18%;
    padding-top: 7%;
    display:block;
    font-size: 20px;
    width:80%;
    margin-top:-13px;
    margin-left:17px;
}



</style>




