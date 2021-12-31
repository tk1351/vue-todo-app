<template>
  <button
      class="tab"
      role="tab"
      :aria-controls="tab.name"
      :aria-selected="tab.selected"
      :tabindex="tab.selected ? 0 : -1"
      v-on:click="handleClick(index)"
  >
    {{ tab.name }}
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ITabElement } from "../../types/types";

export default defineComponent({
  props: {
    tab: {
      type: Object as PropType<ITabElement>,
      required: true
    },
    tabs: {
      type: Object as PropType<ITabElement[]>,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    handleClick(index: number) {
      this.selectTab(index)
    },
    selectTab(index: number) {
      this.tabs.forEach((tab, tabIndex) => {
        tab.selected = index === tabIndex
      })
    }
  }
})
</script>

<style>
.tab {
  width: 100px;
  height: 100%;
  background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
}

[aria-selected='true'] {
  border-bottom: 1px solid dodgerblue;
}
</style>