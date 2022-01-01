<template>
  <input
      type="text"
      name="title"
      placeholder="add details"
      class="input--todo"
  />
</template>

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