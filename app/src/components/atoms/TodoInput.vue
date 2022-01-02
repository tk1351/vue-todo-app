<template>
  <input
      type="text"
      v-model="input"
      placeholder="add details"
      class="input--todo"
  />
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    title: {
      type: String
    }
  },
  computed: {
    input: {
      get() {
        return this.title
      },
      set(value: string) {
        this.$emit('setValue', value)
      }
    }
  }
})
</script>

<style scoped>
.input--todo {
  width: 75%;
  border-radius: 15px;
  border: solid 1px;
}

.input--todo::placeholder {
  padding-left: 10px;
}
</style>