<template>
  <div class="auth">
    <div class="auth__window">
      <h2 class="auth__title">{{ isSignInMode ? "Вход" : "Регистрация" }}</h2>

      <div class="auth__stick"></div>

      <div class="auth__fields">
        <div class="auth__field">
          <p>Email</p>
          <CommonInput v-model="email" type="email" placeholder="Email" />
        </div>

        <div class="auth__field">
          <p>Пароль</p>
          <CommonInput
            v-model="password"
            type="password"
            placeholder="Пароль"
          />
        </div>
      </div>

      <CommonButton v-if="isSignInMode" @click="handleSignIn"
        >Войти</CommonButton
      >
      <CommonButton v-else @click="handleSignUp"
        >Зарегистрироваться</CommonButton
      >

      <div class="auth__stick"></div>

      <div class="auth__toggle">
        {{ isSignInMode ? "Ещё нет аккаунта?" : "Уже есть аккаунт?" }}
        <br />
        <p class="auth__change" @click="toggleMode">
          {{ isSignInMode ? "Регистрация" : "Вход" }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const modalStore = useModalStore();

const supabase = useSupabaseClient();

const isSignInMode = ref(true);

const email = ref("");
const password = ref("");

const toggleMode = () => {
  isSignInMode.value = !isSignInMode.value;
};

const handleSignUp = async () => {
  const { error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  });

  if (error) {
    modalStore.openModal(`Ошибка регистрации: ${getAuthErrorRu(error)}`);
  } else {
    modalStore.openModal(
      "Успешно! Проверь почту, туда ушло письмо для подтверждения.",
    );
  }
};

const handleSignIn = async () => {
  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });

  if (error) {
    modalStore.openModal(`Ошибка входа: ${getAuthErrorRu(error)}`);
  } else {
    await navigateTo("/projects");
  }
};
</script>

<style lang="scss" scoped>
.auth {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100svh;

  &__window {
    display: flex;
    flex-direction: column;
    width: 600px;
    padding: 24px 40px;
    background-color: $white;
    border-radius: 24px;
    gap: 32px;
  }

  &__title {
    font-size: 32px;
  }

  &__stick {
    width: 100%;
    height: 1px;
    background: #00000015;
  }

  &__fields {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  &__field {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__toggle {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  &__change {
    color: rgba($btn-color, 70%);
    cursor: pointer;

    &:hover {
      color: rgba($btn-color, 90%);
    }
  }
}
</style>
