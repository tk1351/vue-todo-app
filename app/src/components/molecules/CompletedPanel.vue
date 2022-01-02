<template>
  <ul class="todo-list-wrapper">
    <li class="list" v-for="task in tasks" :key="task.id">
      <div class="list__task">
        <TodoCheckbox :task="task" />
        <TodoDetail :title="task.title" :id="task.id" />
      </div>
      <div>
        <DeleteIcon :task="task" />
      </div>
    </li>
  </ul>
  <div class="delete-button-wrapper">
    <DeleteButton v-if="tasks.length" />
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import {ITask} from "../../types/types";
import TodoList from "./TodoList.vue";
import DeleteIcon from "../atoms/DeleteIcon.vue";
import TodoDetail from "../atoms/TodoDetail.vue";
import TodoCheckbox from "../atoms/TodoCheckbox.vue";
import DeleteButton from "../atoms/DeleteButton.vue";

export default defineComponent({
  components: {
    DeleteButton,
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

.delete-button-wrapper {
  display: flex;
  justify-content: flex-end;
}
</style>