<template>
  <div class="projects-form">
    <CommonInput
      v-model="newProjectName"
      type="text"
      placeholder="Название проекта"
      :disabled="isSubmitting"
    />
    <CommonButton @click="createProject" :disabled="isSubmitting">
      {{ isSubmitting ? "Создание..." : "Создать проект" }}
    </CommonButton>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: "success"): void;
}>();

const modalStore = useModalStore();

const supabase = useSupabaseClient<Database>();
const user = useSupabaseUser();

const newProjectName = ref("");
const isSubmitting = ref(false);

const createProject = async () => {
  const userId = user.value?.sub;
  if (!newProjectName.value.trim() || !userId) return;

  isSubmitting.value = true;

  const { error } = await supabase.from("projects").insert([
    {
      name: newProjectName.value,
      user_id: userId,
    },
  ]);

  if (error) {
    modalStore.openModal(
      `Ошибка при создании проекта: ${getAuthErrorRu(error)}`,
    );
    return;
  }

  newProjectName.value = "";
  isSubmitting.value = false;

  emit("success");
};
</script>

<style lang="scss" scoped>
.projects-form {
  display: flex;
  gap: 12px;
}
</style>
