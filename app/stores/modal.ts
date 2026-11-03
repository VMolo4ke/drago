export const useModalStore = defineStore("modal", () => {
  const textModal = ref("");
  const isOpenModal = ref(false);

  const openModal = (text: string) => {
    textModal.value = text;
    isOpenModal.value = true;
  };

  const closeModal = () => {
    textModal.value = "";
    isOpenModal.value = false;
  };

  return {
    isOpenModal,
    textModal,
    openModal,
    closeModal,
  };
});
