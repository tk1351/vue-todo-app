<template>
  <div
    :id="index"
    :aria-hidden="!tab.selected"
    role="tabpanel"
    class="tabpanel"
  >
    <AllPanel v-if="checkSelectedTab('All')" :tasks="allTasks" />
    <ActivePanel v-if="checkSelectedTab('Active')" :tasks="activeTasks" />
    <CompletedPanel v-if="checkSelectedTab('Completed')" :tasks="completedTasks" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import {ITabElement, ITask, Tab} from "../../types/types";
import AllPanel from "./AllPanel.vue";
import ActivePanel from "./ActivePanel.vue";
import CompletedPanel from "./CompletedPanel.vue";
import {useTaskStore} from "../../store";
import {storeToRefs} from "pinia";

export default defineComponent({
  setup() {
    const taskStore = useTaskStore()
    const { allTasks, activeTasks, completedTasks } = storeToRefs(taskStore)
    return {
      allTasks,
      activeTasks,
      completedTasks
    }
  },
  components: {
    CompletedPanel,
    ActivePanel,
    AllPanel
  },
  props: {
    tab: {
      type: Object as PropType<ITabElement>,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    tasks: {
      type: Object as PropType<ITask[]>
    }
  },
  methods: {
    checkSelectedTab(name: Tab) {
      return this.tab.name === name
    }
  }
})
</script>

<style scoped>
.tabpanel {
  min-height: calc(100vh - 20vh - 55px);
}

[aria-hidden='true'] {
  display: none;
}
</style>