<template>
  <div class="projects">
    <ProjectsForm @success="fetchProjects" />
    <ProjectsList :projects />
  </div>
</template>

<script setup lang="ts">
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

    if (error) throw error;

    projects.value = data || [];
  } catch (error: unknown) {
    const message =
      error instanceof Error
        ? error.message
        : ((error as { message?: string })?.message ?? String(error));

    console.error("Ошибка при загрузке проектов:", message);
  }
};

onMounted(() => {
  fetchProjects();
});
</script>

<style lang="scss" scoped>
.projects {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: 24px;
}
</style>
