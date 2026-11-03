<template>
  <div class="projects">
    <ProjectsForm @success="fetchProjects" />
    <ProjectsList :projects />
  </div>
</template>

<script setup lang="ts">
const modalStore = useModalStore();

const supabase = useSupabaseClient<Database>();
const user = useSupabaseUser();

type ProjectRow = Database["public"]["Tables"]["projects"]["Row"];
const projects = ref<ProjectRow[]>([]);

const fetchProjects = async () => {
  const userId = user.value?.sub;
  if (!userId) return;

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("user_id", userId);

  if (error) {
    modalStore.openModal(
      `Ошибка при загрузке проектов: ${getAuthErrorRu(error)}`,
    );
    return;
  }

  projects.value = data || [];
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
