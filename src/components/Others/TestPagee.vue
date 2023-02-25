<template>
  <div>
    <!-- <h2>Component B</h2> -->
    <v-card class="statuscard"> <span> <input type="radio" class="status1" value="Yet to start" > Yet to start</span></v-card>
    <!-- <span> <input type="radio" class="status3" value="Yet to start" > Yet to start</span> -->
  </div>
</template>
<script>

</script>

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
</style>
