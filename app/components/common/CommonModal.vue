<template>
  <Teleport to="body">
    <div v-if="isOpenModal" class="modal">
      <div class="modal__window">
        <p>{{ textModal }}</p>
        <CommonButton @click="modalStore.closeModal">Хорошо</CommonButton>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const modalStore = useModalStore();

const { textModal, isOpenModal } = storeToRefs(modalStore);
</script>

<style lang="scss" scoped>
.modal {
  z-index: $z-index-modal;
  position: fixed;
  top: 0;
  left: 0;
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
