<template>
  <div class="tablist">
    <div class="tabs">
      <StatusTab
        v-for="(tab, index) in tabs"
        :key="index"
        :tab="tab"
        :tabs="tabs"
        :index="index"
      />
    </div>
    <div>
      <TodoTabPanel
        v-for="(tab, index) in tabs"
        :key="index"
        :tab="tab"
        :index="index"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {Tab, ITabElement} from "../../types/types";
import StatusTab from "../atoms/StatusTab.vue";
import TodoTabPanel from "./TodoTabPanel.vue";

export default defineComponent({
  components: {
    TodoTabPanel,
    StatusTab
  },
  data() {
    const elements: Tab[] = ['All', 'Active', 'Completed']
    return {
      tabs: elements.map((element, index) => {
        return {
          name: element,
          selected: index === 0
        } as ITabElement
      })
    }
  }
})
</script>

<style scoped>
.tablist {
  min-height: calc(100vh - 20vh);
}

.tabs {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid;
  height: 40px;
}
</style>
