<template>
    <v-treeview dense 
    activatable
    color="green"
    :items="items"></v-treeview>
  </template>

  <script>
  export default {
    name: 'AllFeatureTree',
    data: () => ({
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
    }),
  }
</script>