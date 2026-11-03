# Nuxt 3 PWA Low-Code Builder 📱

Высокопроизводительный SaaS-конструктор для сборки и кастомизации мобильных PWA-приложений в режиме реального времени.

## 🚀 Архитектура проекта

- **Low-Code State Engine (Pinia):** Архитектура реактивного состояния спроектирована под динамическое изменение конфигурации PWA на лету. Изменения параметров билдера мгновенно транслируются на кастомный превью-слой без деградации производительности.
- **Backend-Driven Security (Supabase RLS):** Полный отказ от валидации прав на фронтенде. Безопасность изоляции данных клиентов, схем их PWA-приложений и UUID-проектов инкапсулирована на уровне СУБД через **Row Level Security (RLS)**. Защита от IDOR нативного уровня.
- **High-Performance SSR Architecture:** Слой конфигуратора оптимизирован под гидратацию Nuxt 3. Динамические тяжелые интерфейсы сборщика изолированы от серверного рендеринга для исключения `Hydration Mismatch`, гарантируя минимальный `Cumulative Layout Shift (CLS)`.
- **Database & Routing Strategy:** Идентификация проектов пользователей завязана на **UUID v4** (`gen_random_uuid()` на стороне Postgres). Это исключает enumeration-атаки (перебор чужих конфигураций PWA через URL).
- **Robust Exception Layer:** Слой обработки ошибок авторизации GoTrue изолирован в `utils/authErrors.ts` на базе структуры `Map`, гарантируя чистую локализацию статус-кодов.

## 🛠 Стек

- **Core:** Nuxt 3 (SSR Mode), Vue 3 (`script setup`), TypeScript, Pinia.
- **Backend / Auth / DB:** Supabase (PostgreSQL, GoTrue).
- **Styles & Theme Engine:** SCSS (Vite Pipeline via `additionalData`).

## 🚀 Быстрый старт

1. **Настройка окружения:**

   ```bash
   cp .env.example .env
   ```

   _Заполните публичные ключи `NUXT_PUBLIC_SUPABASE_URL`, `NUXT_PUBLIC_SUPABASE_ANON_KEY` и токены доступа для Supabase CLI._

2. **Установка зависимостей:**

   ```bash
   npm install
   ```

3. **Запуск локального окружения:**
   ```bash
   npm run dev
   ```
