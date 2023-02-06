<template>
    <v-treeview :items="items"></v-treeview>
  </template>

  <script>
  export default {
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
                  id: 7,
                  name: 'Story 2',
                  children: [
                    { id: 6, name: 'Scenario 1' },
                    { id: 7, name: 'Scenario 2' },
                  ],
                },
              ],
            },
            {
              id: 8,
              name: 'Epic 2',
              children: [
                {
                  id: 9,
                  name: 'Story 1',
                  children: [
                    { id: 10, name: 'Scenario 1' },
                    { id: 11, name: 'Scenario 2' },
                    
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