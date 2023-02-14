<template >
    <div> 
    <span style="font-size: 20px;width:80%;margin-top:-11px;margin-left:13px;" class="bar-item">Scenario 1
    <!-- <v-btn 
    class="edit" 
    small
        dense 
        outlined  
        color="primary"   
        style="margin-top:3px;margin-left:58%;position:absolute"
        href="/#/HomePage/EditScenarioPage"
     
        >   
        <v-icon>fa fa-edit</v-icon>&nbsp;
        Edit Scenario
    </v-btn> -->
    <v-divider></v-divider>
    <p style="font-size: 18px;position:absolute;margin-top:20px;">Scenario Title : Scenario 1 </p>
    <p style="font-size: 15px;margin-top:50px;">Tags : Tags</p>
   

    
<EditScenarioPage></EditScenarioPage>
</span>
</div>
</template>

<script>
import EditScenarioPage from './EditScenarioPage.vue';
export default {
  components: {
    EditScenarioPage
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