const authErrorMap = new Map<string, string>([
  ["weak_password", "Пароль слишком слабый. Нужно минимум 6 символов."],
  ["invalid_credentials", "Неверный Email или пароль."],
  ["email_not_confirmed", "Почта не подтверждена. Проверь свой почтовый ящик."],
  ["user_already_exists", "Пользователь с таким Email уже зарегистрирован."],
  ["invalid_grant", "Неверные данные для входа."],
  ["signup_disabled", "Регистрация временно отключена."],
]);

export const getAuthErrorRu = (error: any): string => {
  if (!error) return "Неизвестная ошибка";

  return authErrorMap.get(error.code) || "Что-то пошло не так. Попробуй позже.";
};
