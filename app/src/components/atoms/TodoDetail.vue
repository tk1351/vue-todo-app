<template>
  <p>{{ detail }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    detail: {
      type: String
    }
  }
})
</script>