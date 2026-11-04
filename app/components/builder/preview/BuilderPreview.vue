<!-- components/builder/BuilderPreview.vue -->
<template>
  <div class="builder-preview">
    <div class="builder-root">
      <BuilderRenderer
        v-if="canvasStore.currentPage?.root"
        :node="canvasStore.currentPage.root"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const canvasStore = useCanvasStore();
</script>

<style lang="scss" scoped>
.builder-preview {
  width: 375px;
  height: 100%;
  background-color: $bg-sidebar;
  border-radius: 12px;
  border: 1px solid $text-main;
  overflow: hidden;
}

.builder-root {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
</style>
