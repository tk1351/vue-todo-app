<template>
  <ul class="todo-list-wrapper">
    <li class="list" v-for="task in tasks" :key="task.id">
      <div class="list__task">
        {{ task.id }}
        <TodoCheckbox :task="task" />
        <TodoDetail :detail="task.title" />
      </div>
      <div>
        <DeleteIcon :task="task" />
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import {ITask} from "../../types/types";
import TodoList from "./TodoList.vue";
import DeleteIcon from "../atoms/DeleteIcon.vue";
import TodoDetail from "../atoms/TodoDetail.vue";
import TodoCheckbox from "../atoms/TodoCheckbox.vue";

export default defineComponent({
  components: {
    TodoCheckbox,
    TodoDetail,
    DeleteIcon,
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

.list {
  background-color: yellowgreen;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list__task {
  display: flex;
  align-items: center;
}
</style>