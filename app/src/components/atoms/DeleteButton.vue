<template>
  <button type="button" class="button--delete" v-on:click="removeCompletedTasks">
    <span class="material-icons-outlined">
      delete
    </span>
    <span class="button__text">delete all</span>
  </button>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useTaskStore} from "../../store";
import {createConfirmMessage} from "../../lib/confirm";

export default defineComponent({
  setup() {
    const taskStore = useTaskStore()
    return { taskStore }
  },
  methods: {
    removeCompletedTasks() {
      const confirm = createConfirmMessage('全てのタスクを削除しますか？')
      if (!confirm) return
      this.taskStore.removeCompletedTasks()
    }
  }
})
</script>

<style scoped>
.button--delete {
  display: flex;
  align-items: center;
  background-color: tomato;
  border: none;
  height: 55px;
  cursor: pointer;
}

.material-icons-outlined {
  color: #fff;
}

.button__text {
  color: #fff;
}
</style>