<template>
  <input type="checkbox" v-bind:checked="checkCompleted()"/>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import {TodoStatus} from "../../types/types";

export default defineComponent({
  props: {
    status: {
      type: String as PropType<TodoStatus>,
      required: true
    }
  },
  methods: {
    checkCompleted() {
      return this.status === 'completed'
    }
  }
})
</script>