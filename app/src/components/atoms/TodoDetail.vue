<template>
  <p class="title" v-on:click="toggleTaskStatus(id)">{{ title }}</p>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useTaskStore} from "../../store";

export default defineComponent({
  setup() {
    const taskStore = useTaskStore()
    return { taskStore }
  },
  props: {
    title: {
      type: String,
    },
    id: {
      type: Number
    }
  },
  methods: {
    toggleTaskStatus(id: number) {
      this.taskStore.toggleTaskStatus(id)
    }
  }
})
</script>

<style scoped>
.title {
  cursor: pointer;
}
</style>