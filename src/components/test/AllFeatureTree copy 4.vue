<template>
  <div>
    <v-treeview dense activatable color="green" :items="items">
      <template v-slot:default="{ item }">
        <v-treeview-node :item="item">
          <template v-if="item.name === 'Epic 1'">
            <a @click.native="displayEpicPageOne">{{ item.name }}</a>
          </template>
          <template v-else>
            {{ item.name }}
          </template>
        </v-treeview-node>
      </template>
    </v-treeview>

    <EpicPageOne v-show="showEpicPageOne"/>
  </div>
</template>

<script>
import EpicPageOne from '../components/EpicPageOne.vue';

export default {
  name: 'AllFeatureTree',
  components: {
    EpicPageOne,
  },
  data() {
    return {
      showEpicPageOne: false,
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
  updated() {
    console.log(this.showEpicPageOne);
  },
  methods: {
    displayEpicPageOne() {
      this.showEpicPageOne = true;
      
    },
  },
};
</script>
