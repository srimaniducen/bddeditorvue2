<template>
  <div>
    <form @submit.prevent="createTask">
      <input type="text" v-model="ScenarioTitle" placeholder="Enter a task">
      <button type="submit">Add Task</button>
    </form>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        {{ task.task }}
        <button @click="updateTask(task.id)">Edit</button>
        <button @click="deleteTask(task.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      tasks: [],
      ScenarioTitle: ''
    }
  },
  created() {
    this.getTasks()
  },
  methods: {
    async getTasks() {
      const response = await axios.get('http://10.0.1.70:3000/StoryPoint')
      this.tasks = response.data
    },
    async createTask() {
      const response = await axios.post('http://10.0.1.70:3000/Scenarios', { task: this.ScenarioTitle })
      this.tasks.push(response.data)
      this.ScenarioTitle = ''
    },
    async updateTask(id) {
      const response = await axios.patch(`http://10.0.1.70:3000/StoryPoint/${id}`, { task: this.ScenarioTitle })
      const index = this.tasks.findIndex(task => task.id === id)
      this.tasks.splice(index, 1, response.data)
      this.ScenarioTitle = ''
    },
    async deleteTask(id) {
      await axios.delete(`http://10.0.1.70:3000/StoryPoint/${id}`)
      const index = this.tasks.findIndex(task => task.id === id)
      this.tasks.splice(index, 1)
    }
  }
}
</script>
