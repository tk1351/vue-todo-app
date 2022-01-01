<template>
  <form class="form" novalidate>
    <TodoInput />
    <AddButton />
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoInput from "../atoms/TodoInput.vue"
import AddButton from "../atoms/AddButton.vue"

export default defineComponent({
  components: {
    TodoInput,
    AddButton
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