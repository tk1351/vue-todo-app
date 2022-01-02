<template>
  <li class="list">
    <TodoCheckbox :task="task" />
    <TodoDetail :detail="task.title" />
  </li>
</template>

<script lang="ts">
import TodoCheckbox from "../atoms/TodoCheckbox.vue";
import TodoDetail from "../atoms/TodoDetail.vue";
import { defineComponent, PropType } from "vue";
import { ITask } from "../../types/types";

export default defineComponent({
  components: {
    TodoCheckbox,
    TodoDetail,
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
  align-items: center;
}
</style>