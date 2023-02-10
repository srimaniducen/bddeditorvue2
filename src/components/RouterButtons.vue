<template>
    <v-container
      fluid
      class="routercontainer"
    >
      <v-row align="center">
        <v-col
          cols="12"
          sm="6"
        >
          
        <div>
        <button ><router-link to="/HomePage" class="navbar-brand">Add Epic</router-link></button>
       </div>
       <div>
        <button ><router-link to="/" class="navbar-brand">Add Epic Page</router-link></button>
       </div>
       <div>
        <button ><router-link to="/" class="navbar-brand">Add Scenario Page</router-link></button>
       </div>
       <div>
        <button ><router-link to="/" class="navbar-brand">Add Story Page</router-link></button>
       </div>
       <div>
        <button ><router-link to="/" class="navbar-brand">All Feature Page</router-link></button>
       </div>
       <div>
        <button ><router-link to="/" class="navbar-brand">All Features</router-link></button>
       </div>
       <div>
        <button ><router-link to="/" class="navbar-brand">All Features Tree</router-link></button>
       </div>
       <div>
        <button ><router-link to="/" class="navbar-brand">Epic Table</router-link></button>
       </div>
       <div>
        <button ><router-link to="/" class="navbar-brand">Story Table</router-link></button>
       </div>
       <div>
        <button ><router-link to="/" class="navbar-brand">Test Page</router-link></button>
       </div>
       
          
       
     
        </v-col>
      </v-row>
    </v-container>
  </template>
  <style scoped>
  .routercontainer{
    /* text-align: center; */
    margin-top: 50px;
    /* top: 5%; */
    position: absolute;
}
  
  </style>