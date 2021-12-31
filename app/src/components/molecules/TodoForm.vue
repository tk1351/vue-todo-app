<template>
  <div class="form">
    <TodoInput />
    <AddInput />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoInput from "../atoms/TodoInput.vue"
import AddInput from "../atoms/AddInput.vue"

export default defineComponent({
  components: {
    TodoInput,
    AddInput
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