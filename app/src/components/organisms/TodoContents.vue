<template>
  <div class="contents-wrapper">
    <TodoTabs />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoList from "../molecules/TodoList.vue";
import TodoForm from "../molecules/TodoForm.vue";
import TodoTabs from "../molecules/TodoTabs.vue"

export default defineComponent({
  components: {
    TodoForm,
    TodoList,
    TodoTabs
  },

})
</script>

<style scoped>
.contents-wrapper {
  min-height: calc(100vh - 20vh);
  margin: 0 25%;
}
</style>