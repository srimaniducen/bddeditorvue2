<template>
  <span class="scenario">
      <v-col  
          cols="12"
          md="10"  
          style="top:12px;width:66%;position:absolute"      
          >
          <span class="text">Scenario Title</span>
          <v-text-field
          outlined
          dense             
          tabindex="4" >
          </v-text-field>

          <div class="drop-v" style="position:absolute">
              <label class="text">Status</label>
              <v-select 
              class="vselect"
              attach
                  :items="items"
                  outlined         
                  dense  
                  :menu-props="{ bottom: true, offsetY: true }"  
              ></v-select>  
          </div>

          <div style="width:121%;">
            <label class="text">Tags</label>
            <v-text-field
            outlined
          dense             
          tabindex="4"  >
            </v-text-field>
          </div>

          <label class="text">Steps</label>
                <button v-if="!isHidden" class="button btn-primary" style="margin-left:940px;position:absolute" @click="addRow"><v-icon>fa fa-plus</v-icon></button>
    
                  <v-divider></v-divider>
                  <p style="margin-top:13px" v-if="isHidden">Add steps to define your Scenario. <a name="link" v-on:click="isHidden = false" style="color:blue">Click here to add steps</a></p>
                  <div id="app">
                  <table class="table" v-if="!isHidden">
                    <thead>
                      <tr>
                        <td class="text">Condition</td>
                        <td class="text"> Sub titles</td>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr  v-for="(row,index) in rows" :key="index">
                        <td><v-select width="237px" height="33px" :items="drop" outlined dense :menu-props="{ bottom: true, offsetY: true }"  v-model="row.condition"></v-select></td>
                        <td><v-text-field placeholder="Step" outlined dense v-model="row.sub" style="position:absolute;width:763px"></v-text-field></td>
                        <td><button type="button" style="margin-left:564px;position:absolute;margin-top:12px" @click="removeItem">
                              <v-icon small>fa fa-trash</v-icon>
                            </button></td>
                      </tr>
                    </tbody>
                  </table>                  
                  </div>
  
                <br><br>
                    <div>
                    <v-btn
                        class="mx-2"
                        depressed   
                        style="border-radius:9px;height:35px;background-color:#2B5AD9;color:white;"  
    
                    >  
                      <v-icon small>fa fa-save</v-icon>&nbsp; Save
                    </v-btn>
                    &nbsp;
                    <v-btn
                    class="px-10 rounded-e-xl rounded-s-xl"
                      dark     
                        depressed 
                        style="border-radius:9px;height:35px;background-color:#BD2025;color:white;width:23%"  

                        >   
                        <v-icon small>fa-light fa-trash</v-icon>&nbsp;
                        Delete Scenario
                    </v-btn>
                    </div>
      </v-col>
    </span>
</template>





<script>
import "@/assets/Style.css"
export default{
el: "#app",
data:()=> ({
  isHidden: true,
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
  },
  hideColumn(col){
      col.show = false
    }
}
};
</script> 
<style scoped>
.scenario{
position:relative;
top: 56px;
left: 18%;
z-index:1;
}
.theme--light.v-divider {
    border-color: rgba(0, 0, 0, 3.12);
    
}
.v-divider{
  margin-top: 5px;
    position: absolute;
    min-width: 117%;
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
  margin-left:98%;
  margin-top:-90px;
  width:20%;
}
.v-text-field{
        margin-top:8px;
    }

    .vselect.mdi:before {
    margin-top: -8px;
}
</style>