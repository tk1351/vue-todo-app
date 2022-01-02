<template>
  <input
      type="checkbox"
      v-bind:checked="checkCompleted()"
      v-on:change="toggleTaskStatus(task.id)"
  />
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
    task: {
      type: Object as PropType<ITask>,
      required: true
    }
  },
  methods: {
    checkCompleted() {
      return this.task.done === false
    },
    toggleTaskStatus(id: number) {
      this.taskStore.toggleTaskStatus(id)
    }
  }
})
</script>