<template> 
<span>
  <v-text-field
      style="width:78%;position:absolute;width:924px;margin-top:-24px"
      outlined
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
        dense
        direction="center"
      ></v-text-field>
      <div class="button">
<v-btn   
    depressed
    style="margin-left:112%;margin-top:-58px;border-radius:9px;height:35px;background-color:#2B5AD9;color:white"
    href="/#/HomePage/AddStoryPage"
    small>
    <v-icon small>
      fa-thin fa-plus
      </v-icon>&nbsp;
      Add Story
    </v-btn>
</div> 

 <v-data-table id="margin"
  :page.sync="page"
    v-model="selected"
    :headers="headers"    
    :search="search"
    :items="desserts"
    :single-select="singleSelect"
    :css="vdatatableCss"
    item-key="name"
    show-select
    class="elevation-1"
    :value="value"  
  > 
  <template v-slot:[`footer.page-text`]> 
  <v-pagination
  v-model="page"
      :length="6"
    ></v-pagination>
  </template>
  <span> <input type="radio" class="status3" value="Yet to start" > Yet to start</span>
  <template v-slot:[`item.Tags`]="{ item }" >
      <v-chip
      color="black"
      label
      outlined
      >
        {{ item.Tags }}
      </v-chip>      
    </template >

    <template v-slot:[`item.Status`]="{ item }">      
      <v-icon x-small :color="getColor(item.Status)">fas fa-circle</v-icon>
          {{ item.Status }}
    </template>

    <template v-slot:[`item.Prioritize`]="{item}">
      <v-icon
        small
        class="top"
        @click="prioritize(item)"
      >
        fa fa-level-up
      </v-icon>  
      
      

    </template>
  </v-data-table> 
 
</span>
</template>

<script >
  export default {
    data () {      
      return {
        page:1,
        singleSelect: false,
        
        search:'',
        vdatatableCss: {
        theadTh: "header-item",
      },        headers: [
          {
            text: 'Title',
            align: 'start',
            sortable: false,
            value: 'name',
            class: "grey lighten-2"
          },
          { text: 'Status', value: 'Status' ,class: "grey lighten-2"},
          { text: 'Points', value: 'Points',class: "grey lighten-2" },
          { text: 'Assigned', value: 'Assigned',class: "grey lighten-2" },
          {text: 'Tags', value: 'Tags',class: "grey lighten-2"},
          {text:'Prioritize', value:'Prioritize',class: "grey lighten-2"},
        ],
        desserts: [
          {
            name: 'Story 1',
            Status: 'To Do',
            Points: 6.0,
            Assigned: "Srimanikandan",
            Tags:'Tags',
           
          },
          {
            name: 'Story 2',
            Status: 'Process',
            Points: 9.0,
            Assigned: "Manoj Gunupudi",
            Tags:'Tags',           
          },
          {
            name: 'Story 3',
            Status: 23,
            Points: 9.0,
            Assigned: "Manoj ",
            Tags:'Tags',            
          },  
          {
            name: 'Story 4',
            Status: 23,
            Points: 9.0,
            Assigned: "Manoj ",
            Tags:'Tags',            
          },  
          {
            name: 'Story 5',
            Status: 'To Do',
            Points: 9.0,
            Assigned: "Manoj ",
            Tags:'Tags',            
          },  
          {
            name: 'Story 6',
            Status: 23,
            Points: 9.0,
            Assigned: "Manoj ",
            Tags:'Tags',            
          },  
          {
            name: 'Story 7',
            Status: 'To Do',
            Points: 9.0,
            Assigned: "Manoj ",
            Tags:'Tags',            
          },  
          {
            name: 'Story 8',
            Status: 23,
            Points: 9.0,
            Assigned: "Manoj ",
            Tags:'Tags',            
          },  
          {
            name: 'Story 9',
            Status: 'Process',
            Points: 9.0,
            Assigned: "Manoj ",
            Tags:'Tags',            
          },  
          {
            name: 'Story 0',
            Status: 23,
            Points: 9.0,
            Assigned: "Manoj ",
            Tags:'Tags',            
          },  
          {
            name: 'Story 11',
            Status: 'To Do',
            Points: 9.0,
            Assigned: "Manoj ",
            Tags:'Tags',            
          },  
          {
            name: 'Story 12',
            Status: "Process",
            Points: 9.0,
            Assigned: "Manoj ",
            Tags:'Tags',            
          },          
        ],
      }
      
    },
    methods:{
      prioritize(item){
        const index = this.desserts.indexOf(item);
         
        if (index !== 0) {
          [this.desserts[index], this.desserts[0]] = [this.desserts[0], this.desserts[index]];
      }
        this.desserts = [...this.desserts];      
        
      },
    getColor (Status) {
      if (Status === "To Do") return 'red'
      else if (Status === "Process") return 'orange'
      else return 'green'
    },
  }
  }
</script> 
<style scoped>
.status3:checked:after {
     /* margin-left: 2px; */
    margin-bottom: 5px;
       width:13px;
    height:13px;
        border-radius: 15px;
        position: relative;
        background-color: #4B0082;
        content: '';
        display: inline-block;
        visibility: visible;
    }
#margin{
  min-width:127%;
  margin-top:8px;
  position:relative;
}

.v-text-field input {
margin-top:2px;
}
</style>


<!-- <template>  <div>     <h2>Component B</h2> 
    <v-card class="statuscard"> 
      <span> <input type="radio" class="status1" value="Yet to start" > Yet to start</span>
    </v-card>    <span> <input type="radio" class="status3" value="Yet to start" > Yet to start</span> 
    </div></template><script></script>
    <style scoped>
     .status1:checked:after {
  /* margin-left: 2px; */  
    margin-bottom: 50px;
    width:13px;
 height:13px;
     border-radius: 15px;
     position: relative;
     background-color: #4B0082;
     content: '';
     display: inline-block;
     visibility: visible;
 }
 .statuscard{
   width: fit-content;
 }
</style> -->