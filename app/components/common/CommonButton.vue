<template>
  <button class="ui-button"><slot /></button>
</template>

<script setup lang="ts"></script>

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
