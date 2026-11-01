<template>
  <div class="modal">
    <div class="modal__window">
      <p>{{ text }}</p>
      <CommonButton>Хорошо</CommonButton>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<style lang="scss" scoped>
.modal {
  z-index: 10;
  position: fixed;
  width: 100vw;
  height: 100svh;
  background: #00000065;
  display: flex;
  justify-content: center;
  align-items: center;

  &__window {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    border-radius: 12px;
    background: $white;
    color: $black;
  }
}
</style>
