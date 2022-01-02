<template>
  <p class="title" v-on:click="toggleTaskStatus(id)">{{ title }}</p>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import {ITask} from "../../types/types";
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