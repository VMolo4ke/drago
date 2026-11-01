<template>
  <div class="ui-input">
    <input class="ui-input__field" v-model="model" :placeholder :type />
  </div>
</template>

<script setup lang="ts">
const model = defineModel<string>({ default: "" });

defineProps<{
  placeholder: string;
  type: string;
}>();
</script>

<style lang="scss" scoped>
.ui-input {
  &__field {
    width: 100%;
    padding: 16px;
    border-radius: 12px;
    border: 1px solid $border-color;
    font-size: 16px;

    &:focus {
      border: 1px solid $btn-color;
    }
  }
}
</style>
