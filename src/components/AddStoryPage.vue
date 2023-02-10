<template class="main1">
    <v-card class="card">
    <v-container>
<v-col 
cols="12"
md="9"        
>

     <label><b>Story title</b></label>
    <v-text-field  
        outlined         
        dense             
        maxlength="12"           
        tabindex="4"             
    ></v-text-field>
</v-col>

<div  class="status">
    <label><b>Status</b></label>
    <v-autocomplete 
        :items="items"
        outlined         
        dense               
    ></v-autocomplete>
          
</div>
<v-col 
cols="12" 
        style="margin-top:-22px"      
       
>
    <label class="details"><b>Details</b></label>
    <v-divider></v-divider>
</v-col>
 
<v-col 
cols="12"   
xs="100"
        style="margin-top:-26px"     
     
>
    <label ><b>As a</b></label>
    <v-text-field  
    label="user"
        outlined         
        dense           
        class="text-box-style"    
        tabindex="4"             
    ></v-text-field>
</v-col>

 <v-col 
cols="12" 
        style="margin-top:-33px"      
>
    <label><b>I want</b></label>
    <v-text-field 
    label="feature"
        outlined         
        dense             
        class="text-box-style"    
        tabindex="4"             
    ></v-text-field>
 </v-col> 
 
<v-col 
cols="12"    
        style="margin-top:-35px"        
>
    <label ><b>So that</b></label>
    <v-text-field  
    label="reason"
        outlined         
        dense             
        maxlength="12"        
        class="text-box-style"    
        tabindex="4"             
    ></v-text-field>
</v-col>
 
<v-col 
cols="12"
        style="margin-top:-33px"      
>
    <label ><b>Description</b></label>
    <v-textarea  
    label="feature"
        outlined         
        dense             
        maxlength="12"        
        class="text-box-style"    
        tabindex="4"             
    ></v-textarea>
</v-col>

    <v-col 
        cols="12"
        md="3"
        style="margin-top:-38px"    
    >
    <label ><b>Assigned to</b></label>
    <v-autocomplete  
    label="srimanikandan"
        outlined         
        dense          
        class="text-box-style"    
        tabindex="4"             
    ></v-autocomplete>
    </v-col>

    <v-col 
        cols="12"
        md="3"  
        style="margin-top:-38px"      
 
    >
    <label ><b>Epic</b></label>
    <v-autocomplete  
    label="BDD editor epic"
        outlined         
        dense          
        class="text-box-style"    
        tabindex="4"             
    ></v-autocomplete>
    </v-col>

    <v-col 
        cols="12"
        md="3"   
        style="margin-top:-38px"      

    >
    <label><b>Story points</b></label>
    <v-text-field
    outlined
              type="number"
              :rules="[numberRule]"
    ></v-text-field>
    </v-col>

    <v-col 
cols="12"   
        style="margin-top:-38px"      
     
>
    <label ><b>Tags</b></label>
    <v-text-field  
        outlined         
        dense             
        maxlength="12"        
        class="text-box-style"    
        tabindex="4"             
    ></v-text-field>
</v-col>

<v-col 
cols="12"  
        style="margin-top:-38px"      
     
>
<label><b>Tasks</b></label>
<v-divider></v-divider>
</v-col>

<v-col 
 id="app"
cols="12"   
        style="margin-top:-16px"      
>
    <label><b>Type your tasks here</b><br></label>
    <v-text-field outlined         
        dense             
        maxlength="12"        
        class="text-box-style"    
        tabindex="4"
        v-model="newTag" @keyup.enter="addTag"></v-text-field>
    <div>
      <span class="py-2 invisible"></span>
      <span v-for="(tag, index) in tags" class="bg-light-800 px-4 py-2 mr-1 rounded-full" :key="index"><br>
        <v-text-field
        outlined         
        dense             
        maxlength="12"        
        class="text-box-style"    
        tabindex="4">
        <v-checkbox ></v-checkbox><span>{{ tag }}<button @click="deleteTag(tag)" class="mx-1">X</button></span>
      </v-text-field>
      </span>
      </div>
 </v-col>

 <v-col 
cols="12"   
        style="margin-top:-36px"      
     
>
<label><b>BDD Scenarios</b></label>
<v-divider></v-divider>


<label style="font-size:13px">You have no BDD Behaviour Scenarios defined - how are you going to test your story?<a
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        
      >Click to add epic
</a></label>

<div>
    <v-btn
        depressed   
        color="primary"    
        >  
        <v-icon>fa fa-save</v-icon>&nbsp; Save
    </v-btn>
    &nbsp;
    <v-btn     
        depressed  
        outlined  
        color="primary"   
        >   
        <v-icon>fa fa-download</v-icon>&nbsp;
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
.status{
    margin-left:78%;
    margin-top:-101px;
}
</style> 

<script>
  export default {
    data: () => ({  
      items: [ 
        'to do', 'process', 'completed'
        ],
      value: null,
    }),
  }
</script> 

<!-- <script>
  export default{
  el: '#app',
  data:() => ({
    newTag: '',
    tags: []
  }),
  methods: {
    addTag() {
      if (!this.newTag) return;
      this.tags.push(this.newTag);
      this.newTag = '';
    },
    deleteTag(tag) {
      this.tags.splice(this.tags.indexOf(tag), 1);
    }
  }
}
</script>
 -->


