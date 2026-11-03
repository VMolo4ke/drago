# Nuxt 3 + Supabase SaaS Engine

Пет-проект с упором на правильную SSR-архитектуру, делегирование безопасности на уровень СУБД и строгую типизацию.

## 🛠 Стек

- **Frontend:** Nuxt 3 (SSR Mode), Vue 3 (Script Setup), TypeScript, Pinia.
- **Backend:** Supabase (PostgreSQL, GoTrue Auth).
- **Styles:** SCSS (Vite Asset Pipeline via `additionalData`).

## 🧠 Ключевые архитектурные решения (Что под капотом)

- **Data Security via RLS:** Полный отказ от проверки прав владения сущностями на фронтенде. Вся бизнес-логика доступа (проверка `user_id`) инкапсулирована на уровне базы данных через **Supabase Row Level Security (RLS)**. Защита от IDOR «из коробки».
- **Database Architecture:** В качестве Primary Keys используется **UUID v4** с дефолтной генерацией на стороне СУБД через `gen_random_uuid()`. Это полностью исключает вектор атаки через enumeration (перебор инкрементальных ID в URL).
- **SSR-Friendly UI:** Логика динамических интерфейсных слоев спроектирована с учетом особенностей гидратации Nuxt 3. Исключены ошибки `Hydration Mismatch` и минимизирован `Layout Shift (CLS)`.
- **Isolating Auth Exceptions:** Обработка ответов от Supabase Auth (GoTrue) вынесена в изолированный слой утилит (`utils/authErrors.ts`). Маппинг статус-кодов реализован через хэш-таблицу `Map`, что упрощает локализацию и поддержку.

## 🚀 Быстрый старт

1. **Настройка окружения:**

   ```bash
   cp .env.example .env
   ```

   В файле `.env` заполнить публичные ключи `NUXT_PUBLIC_SUPABASE_URL`, `NUXT_PUBLIC_SUPABASE_ANON_KEY` и токены для Supabase CLI.

2. **Установка зависимостей:**

   ```bash
   npm install
   ```

3. **Запуск в режиме разработки:**
   ```bash
   npm run dev
   ```
