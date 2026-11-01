<template>
  <div class="ui-input">
    <input v-model="model" type="text" />
  </div>
</template>

<script setup lang="ts">
const model = defineModel<string>({ default: "" });
</script>

<style lang="scss" scoped></style>
