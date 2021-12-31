<template>
  <li class="list">
    <TodoCheckbox />
    <TodoDetail :detail="task.title" />
    <DeleteIcon />
  </li>
</template>

<script lang="ts">
import TodoCheckbox from "../atoms/TodoCheckbox.vue";
import TodoDetail from "../atoms/TodoDetail.vue";
import DeleteIcon from "../atoms/DeleteIcon.vue";
import { defineComponent, PropType } from "vue";
import { ITask } from "../../types/types";

export default defineComponent({
  components: {
    TodoCheckbox,
    TodoDetail,
    DeleteIcon
  },
  props: {
    task: {
      type: Object as PropType<ITask>
    }
  }
})
</script>

<style scoped>
.list {
  background-color: yellowgreen;
  list-style: none;
  display: flex;
}
</style>