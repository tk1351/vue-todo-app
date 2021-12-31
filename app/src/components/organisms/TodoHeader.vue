<template>
  <div class="header">
    <AppTitle />
  </div>
</template>

<script setup lang="ts">
import AppTitle from "../atoms/AppTitle.vue";
</script>

<style>
.header {
  height: calc(100vh - 85vh);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>