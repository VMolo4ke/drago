import { defineStore } from "pinia";
import { mockProject } from "~/mocks/baseMock";

type WidgetNode = {
  id: string;
  type: string;
  name: string;
  props: Record<string, any>;
  styles: Record<string, any>;
  children?: WidgetNode[];
};

export const useCanvasStore = defineStore("canvas", () => {
  const project = ref(mockProject);
  const currentPageId = ref("page-home");

  const selectedWidgetId = ref<string | null>(null);

  const currentPage = computed(() => {
    return (
      project.value.pages.find((p) => p.id === currentPageId.value) || null
    );
  });

  const selectedWidget = computed<WidgetNode | null>(() => {
    const page = currentPage.value;
    if (!page || !selectedWidgetId.value) return null;

    if (page.root.id === selectedWidgetId.value) {
      return page.root as WidgetNode;
    }

    const findNode = (node: WidgetNode): WidgetNode | null => {
      if (node.id === selectedWidgetId.value) return node;
      if (node.children) {
        for (const child of node.children) {
          const found = findNode(child);
          if (found) return found;
        }
      }
      return null;
    };

    return findNode(page.root as WidgetNode);
  });

  const updateSelectedWidgetProps = (newProps: Record<string, any>) => {
    if (selectedWidget.value) {
      selectedWidget.value.props = {
        ...selectedWidget.value.props,
        ...newProps,
      };
    }
  };

  const updateSelectedWidgetStyles = (newStyles: Record<string, any>) => {
    if (selectedWidget.value) {
      selectedWidget.value.styles = {
        ...selectedWidget.value.styles,
        ...newStyles,
      };
    }
  };

  return {
    project,
    currentPageId,
    selectedWidgetId,

    currentPage,
    selectedWidget,

    updateSelectedWidgetProps,
    updateSelectedWidgetStyles,
  };
});
