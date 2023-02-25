<template>
  <div><AllFeatures></AllFeatures> <AddFeature></AddFeature></div>
</template> <script>
import AllFeatures from "@/components/All/AllFeatures/AllFeatures.vue";
import AddFeature from "@/components/Add/AddFeature/AddFeature.vue";
export default {
  name: "HomePage",
  components: {
    AllFeatures,
    AddFeature,
  },
  data: () => ({
    //
  }),
};
</script>