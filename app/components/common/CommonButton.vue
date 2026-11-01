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
  background: $btn-color;
  color: $white;
  font-size: 16px;

  &:hover {
    cursor: pointer;
  }
}
</style>
