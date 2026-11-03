<template>
  <div v-if="project" class="builder">
    <BuilderSidebar />
  </div>
</template>

<script setup lang="ts">
type ProjectRow = Database["public"]["Tables"]["projects"]["Row"];

defineProps<{
  project: ProjectRow | null;
}>();
</script>

<style lang="scss" scoped>
.builder {
  width: 100%;
  height: 100svh;
  padding: 24px;
}
</style>
