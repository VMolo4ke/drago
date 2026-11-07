<template>
  <div v-if="node.children && node.children.length">
    {{ node.name }}
    <BuilderStructureRenderer
      v-for="child in node.children"
      :key="child.id"
      :node="child"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  node: {
    name: string;
    children?: any[];
  };
}>();
</script>
