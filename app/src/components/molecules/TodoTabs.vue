<template>
  <div class="tablist">
    <StatusTab
      v-for="(tab, index) in tabs"
      :tab="tab"
      :tabs="tabs"
      :index="index"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Tab, ITabElement } from "../../types/types";
import StatusTab from "../atoms/StatusTab.vue";

export default defineComponent({
  components: {
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
  margin: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid;
}
</style>
