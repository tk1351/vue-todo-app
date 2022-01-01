<template>
  <div
    :id="index"
    :aria-hidden="!tab.selected"
    role="tabpanel"
    class="tabpanel"
  >
    <AllPanel v-if="checkSelectedTab('All')" :tasks="tasks" />
    <ActivePanel v-if="checkSelectedTab('Active')" :tasks="tasks" />
    <CompletedPanel v-if="checkSelectedTab('Completed')" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import {ITabElement, ITask, Tab} from "../../types/types";
import AllPanel from "./AllPanel.vue";
import ActivePanel from "./ActivePanel.vue";
import CompletedPanel from "./CompletedPanel.vue";

export default defineComponent({
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
  min-height: calc(100vh - 20vh - 40px);
  background-color: darkseagreen;
}

[aria-hidden='true'] {
  display: none;
}
</style>