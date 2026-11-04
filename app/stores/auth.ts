export const useAuthStore = defineStore("auth", () => {
  const user = useSupabaseUser();

  const supabase = useSupabaseClient();

  const isAuthenticated = computed(() => !!user.value);

  async function logout() {
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
