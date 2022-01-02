<template>
  <form class="form" novalidate v-on:submit.prevent="addTask">
    <TodoInput :title="title" @setValue="setValue" />
    <AddButton />
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoInput from "../atoms/TodoInput.vue"
import AddButton from "../atoms/AddButton.vue"
import {useTaskStore} from "../../store";

export default defineComponent({
  setup() {
    const taskStore = useTaskStore()
    return { taskStore }
  },
  components: {
    TodoInput,
    AddButton
  },
  data() {
    return {
      title: ''
    }
  },
  methods: {
    addTask() {
      console.log('add', this.title)
      this.taskStore.addTask(this.title)
      this.title = ''
    },
    setValue(value: string) {
      this.title = value
    }
  }
})
</script>

<style scoped>
.form {
  display: flex;
  justify-content: space-between;
  height: 55px;
}
</style>