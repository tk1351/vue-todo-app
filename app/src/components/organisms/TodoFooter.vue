<template>
  <div class="footer">
    <AppDescription />
  </div>
</template>

<script setup lang="ts">
import AppDescription from "../atoms/AppDescription.vue";
</script>

<style scoped>
.footer {
  height: calc(100vh - 95vh);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>