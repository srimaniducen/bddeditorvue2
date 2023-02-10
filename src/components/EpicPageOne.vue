<template>
    <v-container class="card">
    <span style="font-size: 20px;">Epic 1
    <v-btn 
    class="edit" 
        dense 
        outlined  
        color="primary"   
        >   
        <v-icon>fa fa-edit</v-icon>&nbsp;
        Edit Epic
    </v-btn>
    <v-divider></v-divider>
    <p style="font-size: 18px;">Epic Title : Title of the epic will be shown</p>
    <p style="font-size: 15px;">Description : Description of the epic will be shown</p>
</span>
</v-container>
</template>

<style scoped>
.theme--light.v-divider {
    border-color: rgba(0, 0, 0, 3.12);
    margin-top:4px;
}
.edit{
    margin-left:1140px;
}
.card{
  position:relative;
  top: 70px;
  margin-left: 5;
}
</style>