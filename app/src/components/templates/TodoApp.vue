<template>
  <div class="wrapper">
    <TodoHeader />
    <TodoContents />
    <TodoFooter />
  </div>
</template>s

<script setup lang="ts">
import TodoContents from "../organisms/TodoContents.vue";
import TodoHeader from "../organisms/TodoHeader.vue";
import TodoFooter from "../organisms/TodoFooter.vue";
</script>

<style scoped>
.wrapper {
  height: 100vh;
}
</style>