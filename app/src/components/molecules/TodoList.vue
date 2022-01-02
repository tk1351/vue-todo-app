<template>
  <li class="list">
    <TodoCheckbox :task="task" />
    <TodoDetail :title="task.title" :id="task.id" />
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
  list-style: none;
  display: flex;
  align-items: center;
  height: 50px;
}
</style>