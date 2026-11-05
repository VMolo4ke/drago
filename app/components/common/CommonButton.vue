<template>
  <component :is="componentType" class="ui-button"><slot /></component>
</template>

<script setup lang="ts">
const attrs = useAttrs();
import { NuxtLink } from "#components";

const componentType = computed(() => {
  return attrs.to ? NuxtLink : "button";
});
</script>

<style lang="scss" scoped>
.ui-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-radius: 12px;
  background: rgba($btn-color, 70%);
  color: $white;
  font-size: 16px;
  transition: background 0.2s ease;

  &:hover {
    cursor: pointer;
    background: $btn-color;
  }
}
</style>
