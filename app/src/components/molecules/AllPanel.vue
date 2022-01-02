<template>
  <TodoForm />
  <ul class="todo-list-wrapper">
    <TodoList
        v-for="task in tasks"
        :key="task.id"
        :task="task"
    />
  </ul>
  <NoTasks v-if="!tasks.length" />
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import {ITask} from "../../types/types";
import TodoForm from "./TodoForm.vue";
import TodoList from "./TodoList.vue";
import NoTasks from "../atoms/NoTasks.vue";

export default defineComponent({
  components: {
    NoTasks,
    TodoForm,
    TodoList
  },
  props: {
    tasks: {
      type: Object as PropType<ITask[]>
    }
  }
})
</script>

<style scoped>
.todo-list-wrapper {
  margin: 0;
  padding-left: 0;
}
</style>