<template>
  <ul class="todo-list-wrapper">
    <TodoList
        v-for="task in tasks"
        :key="task.id"
        :task="task"
    />
  </ul>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import {ITask} from "../../types/types";
import TodoList from "./TodoList.vue";

export default defineComponent({
  components: {
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