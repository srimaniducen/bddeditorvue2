<template>
    <span class="scenario">
        <v-col  
            cols="12"
            md="10"  
            style="top:12px;width:65%;position:absolute"      
            >
            <b >Scenario Title</b>
            <v-text-field
            outlined
            dense             
            tabindex="4" >
            </v-text-field>
  
            <div class="drop-v" style="position:absolute">
                <label><b>Status</b></label>
                <v-select 
                    :items="items"
                    outlined         
                    dense  
                    :menu-props="{ bottom: true, offsetY: true }"  
                ></v-select>  
            </div>
  
            <div style="width:117%;">
              <label><b>Tags</b></label>
              <v-text-field
              outlined
            dense             
            tabindex="4"  >
              </v-text-field>
            </div>
  
            <label><b>Steps</b></label>
                  <button class="button btn-primary" style="margin-left:940px;position:absolute" @click="addRow"><v-icon>fa fa-plus</v-icon></button>
      
                    <v-divider style="margin-top:5px;width:1168px;position:absolute"></v-divider>
                    <div id="app">
                    <table class="table">
                      <thead>
                        <tr>
                          <th><strong>Condition</strong></th>
                          <th><strong>Sub titles</strong></th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(row,index) in rows" :key="index">
                          <td><v-select width="237px" :items="drop" outlined dense :menu-props="{ bottom: true, offsetY: true }"  v-model="row.condition"></v-select></td>
                          <td><v-text-field placeholder="Step" outlined dense v-model="row.sub" style="position:absolute;width:763px"></v-text-field></td>
                          <td><button type="button" style="margin-left:564px;position:absolute" @click="removeItem">
                                <v-icon>fa fa-trash</v-icon>
                              </button></td>
                        </tr>
                      </tbody>
                    </table>                  
                    </div>
    
                  <br><br>
                      <div>
                      <v-btn
                          class="mx-2"
                          dark
                          depressed   
                          color="blue"    
                      >  
                        <v-icon>fa fa-save</v-icon>&nbsp; Save
                      </v-btn>
                      &nbsp;
                      <v-btn
                      class="mx-2"
                        dark     
                          depressed 
                          color="red"
                          >   
                          <v-icon>fa fa-trash</v-icon>&nbsp;
                          Download Feature File
                      </v-btn>
                      </div>
        </v-col>
      </span>
  </template>
  
  
  <style scoped>
  .scenario{
  position:relative;
  top: 56px;
  left: 21%;
  z-index:1;
  }
  .theme--light.v-divider {
      border-color: rgba(0, 0, 0, 3.12);
      
  }
  .v-divider{
    margin-top: -13px;
      position: absolute;
      min-width: 114%;
  }
  table , tr,td,th {
  border-style: none;
  padding: 10px;
  width: 50%;
  }
  .drop-v::v-deep .v-select .v-select__selections input {
    display: none;
  }
  
  .drop-v{
    margin-left:100%;
    margin-top:-90px;
    width:123px;
  }
  </style>
  
  
  <script> 
  export default{
  el: "#app",
  data:()=> ({
    items: [ 
        'to do', 'process', 'completed'
        ],
        drop:[
          'When','Given'
        ],
        rows:[]
  }),
  methods:{
    addRow: function(){
      this.rows.push({condition:"",sub:""});
    },
    removeItem(){
      this.rows.splice(this.rows, 1)
    }
  }
  };
  </script> 
  