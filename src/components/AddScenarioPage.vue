<template>
    <v-card class="card">
    <v-container >
        <v-col  
            cols="12"
            md="10"        
            >
            <b>Scenario Title</b>
            <v-text-field
            outlined
            dense             
            tabindex="4" >
            </v-text-field>

            <div style="margin-left:932px;position:absolute;margin-top:-90px;width:237px"  class="drop-v">
                <label><b>Status</b></label>
                <v-select 
                    :items="items"
                    outlined         
                    dense  
                    :menu-props="{ bottom: true, offsetY: true }"  
                ></v-select>  
            </div>

            <div style="width:1168px;">
              <label><b>Tags</b></label>
              <v-text-field
              width="50%"
              outlined
              dense            
              tabindex="4" >
              </v-text-field>
            </div>

             <label><b>Steps</b></label>
                <button class="button btn-primary" style="margin-left:1100px;position:absolute" @click="addRow"><v-icon>fa fa-plus</v-icon></button>
    
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
                        <td><v-text-field placeholder="Step" outlined dense v-model="row.sub" style="position:absolute;width:890px"></v-text-field></td>
                        <td><button type="button" style="margin-left:690px;position:absolute" @click="removeItem">
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
    </v-container>
</v-card>
</template>


<style scoped>
.card{
  position:relative;
  top: 70px;
  margin-left: 5;
}
.theme--light.v-divider {
    border-color: rgba(0, 0, 0, 3.12);
    margin-top:4px;
}
table , tr,td,th {
  border-style: none;
  padding: 10px;
  width: 50%;
}
.drop-v::v-deep .v-select .v-select__selections input {
    display: none;
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



