<template>
<span>Story title 
    <v-text-field  
    class="title"          
            solo
        >
    </v-text-field>

    <div class="status">  Status
    <v-autocomplete    
            solo
            label="to do"
        >
    </v-autocomplete>
</div>
<div class="details">Details</div><v-divider></v-divider>
<div class="user">As a</div>
<v-text-field            
            solo
            label="user"
        >
    </v-text-field>
    <div class="feature">I want</div>
<v-text-field            
            solo
            label="feature"
        >
    </v-text-field>
    <div class="sothat">So that</div>
<v-text-field            
            solo
            label="reason"
        >
    </v-text-field>
    <div class="desc">Description</div>
<v-textarea           
            solo
            label="Type a detailed description of your story here"
        >
</v-textarea>
<div class="assigned">  Assigned to
    <v-autocomplete    
            solo
            label="srimanikandan"
        >
    </v-autocomplete>
    </div>
    <div class="epic">  Epic
    <v-autocomplete    
            solo
            label="BDD Editor Epic"
        >
    </v-autocomplete>
    </div>
    <div class="Points">  Story Points
    <v-autocomplete    
            solo
        >
    </v-autocomplete>
    </div>
    <div class="tags">Tags</div>
<v-text-field            
            solo
        >
    </v-text-field>
    <div class="task">Task</div><v-divider></v-divider>

    <div class="task">Type your tasks here</div>
<v-text-field            
            solo
        >
    </v-text-field>

    <v-checkbox label="Task Name"></v-checkbox> 

    <v-checkbox label="Lorem"></v-checkbox> 

    <div class="details">BDD Scenarios</div><v-divider></v-divider>
    You have no BDD Behaviour Scenarios defined - how are yoiu going to test your story?<a
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        
      >Click to add epic
      </a>

      <div><v-btn color="blue">
      Save
    </v-btn>

    <v-btn
      class="ma-2"
      outlined
      color="blue"
    >
      Download feature file
    </v-btn></div>

</span>


</template>

<style scoped>
 .title{
    height:50px;
      width: 1000px;
}
.status{
    margin-top:-72px;
    height:50px;
    margin-left:1040px;
}
.details{
    margin-top:24px;
}
.user{
    margin-top:12px;
}
.feature{
    margin-top:-7px;
}
.epic
{
width:250px;
} 
.assigned{
width:250px;
}
.Points{
    width:250px;

}
.task{
    margin-top:20px;
}
</style>