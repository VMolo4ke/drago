<template>
  <div class="structure-renderer">
    <span class="structure-renderer__parent">{{ node.name }}</span>
    <div
      class="structure-renderer__children"
      v-if="node.children && node.children.length"
    >
      <BuilderStructureRenderer
        v-for="child in node.children"
        :key="child.id"
        :node="child"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  node: {
    id: string;
    type: string;
    name: string;
    props: Record<string, any>;
    styles: Record<string, any>;
    children?: any[];
  };
}>();
</script>

<style lang="scss" scoped>
.structure-renderer {
  display: flex;
  flex-direction: column;
  gap: 6px;

  &__parent {
    cursor: pointer;
  }

  &__children {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding-left: 20px;
  }
}
</style>
