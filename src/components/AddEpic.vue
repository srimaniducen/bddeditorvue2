<template>
  <div>
  <span style="margin-right:50%" class="container">
    <b>All Features </b>   

<v-divider></v-divider>
You have no epics created yet.<a
        href="/HomePage/AddEpicPage"
        
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
  position: absolute;
  top: 80px;
  margin-left: 30%;
}
</style>

