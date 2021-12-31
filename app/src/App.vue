<template>
  <TodoApp />
</template>

<script lang="ts">
import TodoApp from "./components/templates/TodoApp.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {
    TodoApp
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
