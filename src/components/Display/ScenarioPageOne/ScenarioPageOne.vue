<template >
    <v-col> 
    <span  class="scenario1">Scenario 1
    <v-divider ></v-divider>
    <p contenteditable="true" style="width:130%;margin-top:17px;font-size: 18px;position:relative;">Scenario Title : Title of the Scenario will be shown  </p>
    <p contenteditable="true" style="font-size: 15px; margin-top:-5px;margin-bottom: 40px;">Description : Description of the Scenario  will be shown style</p>
   

    
<EditScenarioPage></EditScenarioPage>
</span>
</v-col>
</template>

<script>
import EditScenarioPage from '@/components/Edit/EditScenarioPage/EditScenarioPage.vue';
export default {
  components: {
    EditScenarioPage
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
    margin-top:6px;
}
.edit{
    margin-left:870px;
}
.scenario1 {
    padding-left: 17%;
    padding-top: 7%;
    display:block;
    font-size: 20px;
    width:80%;
    margin-top:-31px;
    margin-left:13px;
}


</style>