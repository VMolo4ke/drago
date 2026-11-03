<template>
  <BuilderMain :project />
</template>

<script setup lang="ts">
const route = useRoute();
const supabase = useSupabaseClient();
const modalStore = useModalStore();

type ProjectRow = Database["public"]["Tables"]["projects"]["Row"];
const project = ref<ProjectRow | null>(null);

const fetchProject = async () => {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", String(route.params.id))
    .single();

  if (error || !data) {
    modalStore.openModal("Доступ запрещен или проект не существует");
    return navigateTo("/projects");
  }

  project.value = data;
};

onMounted(fetchProject);
</script>
