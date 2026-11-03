<template>
  <aside class="builder-sidebar">
    <nav
      class="builder-sidebar__nav"
      aria-label="Панель инструментов конструктора"
    >
      <ul class="builder-sidebar__tabs">
        <li v-for="tab in tabs" :key="tab.id" class="builder-sidebar__tab-item">
          <button
            type="button"
            class="builder-sidebar__tab-btn"
            :class="{
              'builder-sidebar__tab-btn--active': activeTab === tab.id,
            }"
            @click="changeTab(tab.id)"
          >
            <Icon
              :name="`lucide:${tab.icon}`"
              class="builder-sidebar__tab-icon"
            />
            <span class="builder-sidebar__tab-label">{{ tab.label }}</span>
          </button>
        </li>
      </ul>
    </nav>

    <div class="builder-sidebar__content">
      <slot />
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref } from "vue";

type SidebarTab = "pages" | "widgets" | "manifest";

interface TabItem {
  id: SidebarTab;
  label: string;
  icon: string;
}

const tabs: TabItem[] = [
  { id: "pages", label: "Страницы", icon: "folder-tree" },
  { id: "widgets", label: "Виджеты", icon: "layout-grid" },
  { id: "manifest", label: "Настройки", icon: "smartphone" },
];

const activeTab = ref<SidebarTab>("widgets");

const changeTab = (tabId: SidebarTab): void => {
  activeTab.value = tabId;
};
</script>

<style lang="scss" scoped>
.builder-sidebar {
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 100%;
  background-color: $bg-sidebar;
  border-radius: 12px;
  overflow: hidden;

  &__nav {
    padding: 12px;
    border-bottom: 1px solid $border-color;
    background-color: rgba($primary-color, 0.4);
  }

  &__tabs {
    display: flex;
    gap: 8px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__tab-item {
    flex: 1;
  }

  &__tab-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    width: 100%;
    padding: 10px 6px;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 8px;
    color: $text-muted;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      color: $btn-color;
      background-color: $bg-tab-hover;
    }

    &--active {
      color: $white;
      background-color: $btn-color;
      border-color: darken($btn-color, 5%);
    }
  }

  &__tab-icon {
    font-size: 20px;
  }

  &__content {
    flex: 1;
    padding: 16px;
    overflow-y: auto;
    background-color: $white;
    color: $text-main;
  }
}
</style>
