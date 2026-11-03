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

const supabase = useSupabaseClient<Database>();
const user = useSupabaseUser();

const newProjectName = ref("");
const isSubmitting = ref(false);

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

    emit("success");
  } catch (error: any) {
    alert(`Ошибка при создании проекта: ${error.message}`);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style lang="scss" scoped>
.projects-form {
  display: flex;
  gap: 12px;
}
</style>
