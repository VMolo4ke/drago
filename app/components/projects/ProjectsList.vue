<template>
  <div class="projects-container">
    <ProjectsForm @success="fetchProjects" />

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
  </div>
</template>

<script setup lang="ts">
import type { Database } from "~/types/supabase";

const supabase = useSupabaseClient<Database>();
const user = useSupabaseUser();

type ProjectRow = Database["public"]["Tables"]["projects"]["Row"];
const projects = ref<ProjectRow[]>([]);

const fetchProjects = async () => {
  const userId = user.value?.sub;

  if (!userId) return;

  try {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("user_id", userId);

    console.log(data);

    if (error) throw error;
    projects.value = data || [];
  } catch (error: any) {
    console.error(`Ошибка при загрузке проектов: ${error.message}`);
  }
};

onMounted(() => {
  fetchProjects();
});
</script>

<style lang="scss" scoped>
.projects-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

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
