<template>
  <div>
  <span style="width:80%" class="container">
    <b>All Features </b>   

<v-divider></v-divider>
You have no epics created yet.<a
        href="/#/HomePage/AddEpicPage"
        
      >Click to add epic
      </a>
  
</span>
</div>
</template>
<script>
export default {
  name: 'AddEpic',

  components: {

   

  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.container{
    z-index: 1;
    margin-top: 6%;
    position:absolute;
    margin-left:20%;
}

</style>

