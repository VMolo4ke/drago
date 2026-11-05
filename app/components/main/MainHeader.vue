<template>
  <header class="main-header">
    <h1 class="main-header__title">DRAGO</h1>
    <CommonButton to="/auth">Войти / Зарегистрироваться</CommonButton>
  </header>
</template>

<style lang="scss" scoped>
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 64px;

  &__title {
    font-size: 32px;
    font-weight: 800;
    color: $text-main;
    cursor: default;
  }
}
</style>
