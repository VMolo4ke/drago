<template>
  <div class="projects-list">
    <div
      v-for="project in projects"
      :key="project.id"
      class="projects-list__item projects-list-item"
    >
      <h3 class="projects-list-item__title">{{ project.name }}</h3>
    </div>

    <div v-if="projects.length === 0" class="projects-list__empty">
      Проектов пока нет. Создайте первый!
    </div>
  </div>
</template>

<script setup lang="ts">
type ProjectRow = Database["public"]["Tables"]["projects"]["Row"];

defineProps<{
  projects: ProjectRow[];
}>();
</script>

<style lang="scss" scoped>
.projects-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.projects-list-item {
  padding: 24px;
  background: $white;
  border-radius: 16px;
  border: 1px solid #00000015;
  transition: border 0.2s ease;
  cursor: pointer;

  &:hover {
    border: 1px solid $black;
  }

  &__title {
    font-size: 18px;
  }
}
</style>
