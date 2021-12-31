<template>
  <div class="contents-wrapper">
    <TodoTabs />
    <TodoForm />
    <ul class="todo-list-wrapper">
      <TodoList
          v-for="task in tasks"
          :key="task.id"
          :task="task"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ITask } from "../../types/types";
import TodoList from "../molecules/TodoList.vue";
import TodoForm from "../molecules/TodoForm.vue";
import TodoTabs from "../molecules/TodoTabs.vue"

export default defineComponent({
  components: {
    TodoForm,
    TodoList,
    TodoTabs
  },
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: 'Do coding Vue',
          status: 'active'
        },
        {
          id: 2,
          title: 'Do coding React',
          status: 'completed'
        },
        {
          id: 3,
          title: 'Do coding Angular',
          status: 'completed'
        },
      ] as ITask[]
    }
  }
})
</script>

<style scoped>
.contents-wrapper {
  min-height: calc(100vh - 20vh);
  background-color: cadetblue;
  margin: 0 25%;
}

.todo-list-wrapper {
  margin: 0;
  padding-left: 0;
}
</style>