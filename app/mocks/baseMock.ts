export const mockProject = {
  id: "project-uuid-111",
  userId: "user-uuid-222",
  name: "Мое PWA Приложение",
  manifest: {
    name: "Demo App",
    short_name: "Demo",
    theme_color: "#0085ff",
    background_color: "#ffffff",
    display: "standalone",
    start_url: "/",
  },
  pages: [
    {
      id: "page-home",
      name: "Главная страница",
      path: "/",
      root: {
        id: "root-screen",
        type: "div",
        name: "Экран телефона",
        props: {},
        styles: {
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          padding: "20px",
          height: "100%",
          backgroundColor: "#ffffff",
        },
        children: [
          {
            id: "widget-text-1",
            type: "div",
            name: "Заголовок экрана",
            props: { text: "Добро пожаловать в SaaS Конструктор!" },
            styles: {
              fontSize: "20px",
              fontWeight: "bold",
              color: "#1a1a1a",
              textAlign: "center",
            },
            children: [
              {
                id: "widget-text-3",
                type: "div",
                name: "Заголовок экрана 3",
                props: { text: "Добро пожаловать в SaaS Конструктор!" },
                styles: {
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#1a1a1a",
                  textAlign: "center",
                },
              },
            ],
          },
          {
            id: "widget-btn-1",
            type: "button",
            name: "Кнопка действия",
            props: { label: "Начать проектирование" },
            styles: {
              padding: "14px",
              backgroundColor: "#0085ff",
              color: "#ffffff",
              borderRadius: "8px",
              textAlign: "center",
              fontWeight: "600",
              border: "none",
              cursor: "pointer",
            },
          },
        ],
      },
    },
  ],
};
