<template>
  <div class="auth">
    <div class="auth__window">
      <h3 class="auth__title">{{ isSignInMode ? "Вход" : "Регистрация" }}</h3>

      <div class="auth__stick"></div>

      <div class="auth__fields">
        <input v-model="email" type="email" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Пароль" />
      </div>

      <button v-if="isSignInMode" @click="handleSignIn">Войти</button>
      <button v-else @click="handleSignUp">Зарегистрироваться</button>

      <p class="auth__toggle" @click="isSignInMode = !isSignInMode">
        {{ isSignInMode ? "Ещё нет аккаунта?" : "Уже есть аккаунт?" }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { createClient } from "@supabase/supabase-js";

const config = useRuntimeConfig();
const supabase = createClient(
  config.public.supabaseUrl,
  config.public.supabaseAnonKey,
);

const isSignInMode = ref(true);

const email = ref("");
const password = ref("");

const handleSignUp = async () => {
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  });

  if (error) {
    alert("Ошибка регистрации: " + error.message);
  } else {
    alert("Успешно! Проверь почту, туда ушло письмо для подтверждения.");
    console.log("Пользователь:", data.user);
  }
};

const handleSignIn = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });

  if (error) {
    alert("Ошибка входа: " + error.message);
  } else {
    alert("Вы успешно вошли!");
    console.log("Сессия:", data.session);
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
    padding: 24px;
    background-color: #fff;
    border-radius: 24px;
    gap: 40px;
  }

  &__title {
    font-size: 32px;
  }

  &__stick {
    width: 100%;
    height: 2px;
    background: #00000015;
  }
}
</style>
