<template>
  <div class="projects-container">
    <div class="create-project-form">
      <input
        v-model="newProjectName"
        type="text"
        placeholder="Название проекта"
        :disabled="isSubmitting"
      />
      <button @click="createProject" :disabled="isSubmitting">
        {{ isSubmitting ? "Создание..." : "Создать проект" }}
      </button>
    </div>

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

const newProjectName = ref("");
const isSubmitting = ref(false);

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

const createProject = async () => {
  const userId = user.value?.sub;

  if (!newProjectName.value.trim() || !userId) return;

  isSubmitting.value = true;

  try {
    const { error } = await supabase.from("projects").insert([
      {
        name: newProjectName.value,
        user_id: userId,
      },
    ]);

    if (error) throw error;

    newProjectName.value = "";
    await fetchProjects();
  } catch (error: any) {
    alert(`Ошибка при создании проекта: ${error.message}`);
  } finally {
    isSubmitting.value = false;
  }
};

onMounted(() => {
  fetchProjects();
});
</script>

<style lang="scss" scoped>
.projects-list {
}
</style>
