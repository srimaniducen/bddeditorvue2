<template>
    <div>
      <button @click="showTree = !showTree">Toggle Tree View</button>
      <div v-if="showTree">
        <ul>
          <li>Node 1
            <ul>
              <li>Sub Node 1</li>
              <li>Sub Node 2</li>
            </ul>
          </li>
          <li>Node 2
            <ul>
              <li>Sub Node 3</li>
              <li>Sub Node 4</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </template>
<script>
export default {
  data() {
    return {
      showTree: false
    };
  }
};
</script>
  