export const useAuthStore = defineStore("auth", () => {
  const user = computed(() => useSupabaseUser());

  const isAuthenticated = computed(() => !!user.value?.value);

  async function logout() {
    const supabase = useSupabaseClient();

    const { error } = await supabase.auth.signOut();
    if (!error) {
      await navigateTo("/auth");
    }
  }

  return {
    user,
    isAuthenticated,
    logout,
  };
});
