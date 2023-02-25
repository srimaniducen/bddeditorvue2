<template>
  <div>
  <span class="container">
    <span class="text">All Features </span>   

<v-divider style="margin-top:4px"></v-divider>
<p style="margin-top:-6px;" class="text">You have no feature created yet.
<a
        href="/#/HomePage/AddFeaturePage"
        
      >Click to add feature
      </a>
  </p>
</span>
</div>
</template>
<script>
export default {
  name: 'AddFeature',

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
    margin-top: 5%;
    position:absolute;
    margin-left:20%;
}
.theme--light.v-divider {
    border-color: rgba(0, 0, 0, 3.12);
    
}

</style>

