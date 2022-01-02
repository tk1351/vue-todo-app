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
import {createConfirmMessage} from "../../lib/confirm";

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
      const confirm = createConfirmMessage(`${this.task.title}を削除しますか？`)
      if (!confirm) return
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