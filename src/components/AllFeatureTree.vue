<template>
  <div>
    <v-treeview
      v-model="tree"
      :items="items"
      activatable
      item-key="name">
      <template v-slot:label="{ item }">
        <a v-if="item.name === 'Epic 1'" @click="displayEpicPageOne(item)">{{ item.name }}</a>
        <a v-else-if="item.name === 'Story 1'" @click="displayStoryPageOne(item)">{{ item.name }}</a>
        <a v-else-if="item.name === 'All Features'" @click="displayAllFeaturePage(item)">{{ item.name }}</a>
        <a v-else-if="item.name === 'Scenario 1'" @click="displayScenarioPageOne(item)">{{ item.name }}</a>
        <template v-else>{{ item.name }}</template>
      </template>
    </v-treeview>

    <!-- <EpicPageOne v-if="showEpicPageOne"/>
    <StoryPageOne v-if="showStoryPageOne"/> -->
  </div>
</template>

<script>
// import EpicPageOne from '../components/EpicPageOne.vue';
// import StoryPageOne from '../components/StoryPageOne.vue';

export default {
  name: 'AllFeatureTree',
  components: {
    // EpicPageOne,
    // StoryPageOne,
  },
  data() {
    return {
      showEpicPageOne: false,
      showStoryPageOne: false,
      items: [
        {
          id: 1,
          name: 'All Features',
          children: [
            {
              id: 2,
              name: 'Epic 1',
              children: [
                {
                  id: 3,
                  name: 'Story 1',
                  children: [
                    { id: 4, name: 'Scenario 1' },
                    { id: 5, name: 'Scenario 2' },
                  ],
                },
                {
                  id: 6,
                  name: 'Story 2',
                  children: [
                    { id: 7, name: 'Scenario 1' },
                    { id: 8, name: 'Scenario 2' },
                  ],
                },
              ],
            },
            {
              id: 9,
              name: 'Epic 2',
              children: [
                {
                  id: 10,
                  name: 'Story 1',
                  children: [
                    { id: 11, name: 'Scenario 1' },
                    { id: 12, name: 'Scenario 2' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    displayEpicPageOne(item) {
      console.log(item);
      this.showEpicPageOne = !this.showEpicPageOne;
      this.$router.push({ path: '/HomePage/EpicPageOne' });
    },
    displayStoryPageOne() {
      this.showStoryPageOne = !this.showStoryPageOne;
      this.$router.push({ path: '/HomePage/StoryPageOne' });
    },
    displayAllFeaturePage() {
      // this.showStoryPageOne = !this.showStoryPageOne;
      this.$router.push({ path: '/HomePage/AllFeaturePage' });
    },
    displayScenarioPageOne() {
      // this.showStoryPageOne = !this.showStoryPageOne;
      this.$router.push({ path: '/HomePage/ScenarioPageOne' });
    },
  },
};
</script>
