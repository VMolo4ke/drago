<template>
  <div class="sidebar-structure">
    <BuilderStructureRenderer
      v-if="canvasStore.currentPage?.root"
      :node="canvasStore.currentPage.root"
    />
  </div>
</template>

<script setup lang="ts">
const canvasStore = useCanvasStore();
</script>

<style lang="scss" scoped></style>
