<template>
  <component :is="node.type" :style="node.styles">
    <template v-if="node.props?.text">
      {{ node.props.text }}
    </template>

    <template v-else-if="node.props?.label">
      {{ node.props.label }}
    </template>

    <template v-if="node.children && node.children.length">
      <BuilderRenderer
        v-for="child in node.children"
        :key="child.id"
        :node="child"
      />
    </template>
  </component>
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
.canvas-node {
  box-sizing: border-box;
  transition: outline 0.15s ease-in-out;

  &:hover {
    outline: 1px dashed $btn-color;
  }

  &.is-selected {
    outline: 2px solid $btn-color !important;
  }
}

// Сброс браузерных стилей для кнопок
button.canvas-node {
  font-family: inherit;
  font-size: inherit;
}
</style>
