<template>
  <span
      class="material-icons-outlined"
      v-on:click="removeTask(this.task.id)"
  >
    delete
  </span>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import {useTaskStore} from "../../store";
import {ITask} from "../../types/types";

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
    removeTask(id: number) {
      const removeMessage = window.confirm(`${this.task.title}を削除しますか？`)
      if (!removeMessage) return
      this.taskStore.removeTask(id)
    }
  }
})
</script>

<style scoped>
.material-icons-outlined {
  cursor: pointer;
}
</style>