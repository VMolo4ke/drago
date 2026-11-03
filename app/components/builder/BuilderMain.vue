<template>
  <div v-if="project" class="builder">
    <h1>{{ project.name }}</h1>
  </div>
</template>

<script setup lang="ts">
type ProjectRow = Database["public"]["Tables"]["projects"]["Row"];

defineProps<{
  project: ProjectRow | null;
}>();
</script>

<style lang="scss" scoped></style>
