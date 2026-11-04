<template>
  <div ref="widgetRef" class="widget unselectable" @mousedown="startDrag">
    <h3>Заголовок</h3>
  </div>
</template>

<script setup lang="ts">
const { project } = storeToRefs(useCanvasStore());

const widgetRef = ref<HTMLElement | null>(null);
let clone: HTMLElement | null = null;

let shiftX = 0;
let shiftY = 0;

const startDrag = (event: MouseEvent) => {
  if (!widgetRef.value) return;

  const rect = widgetRef.value.getBoundingClientRect();

  shiftX = event.clientX - rect.left;
  shiftY = event.clientY - rect.top;

  clone = widgetRef.value.cloneNode(true) as HTMLElement;

  Object.assign(clone.style, {
    position: "fixed",
    left: `${rect.left}px`,
    top: `${rect.top}px`,
    width: `${rect.width}px`,
    height: `${rect.height}px`,
    zIndex: "9999",
    pointerEvents: "none",
    cursor: "grabbing",
    opacity: "0.8",
  });

  widgetRef.value.style.cursor = "grabbing";

  document.body.appendChild(clone);

  document.addEventListener("mousemove", onDrag);
  document.addEventListener("mouseup", stopDrag);
};

const onDrag = (event: MouseEvent) => {
  if (!clone) return;

  clone.style.left = `${event.clientX - shiftX}px`;
  clone.style.top = `${event.clientY - shiftY}px`;
};

const stopDrag = (event: MouseEvent) => {
  if (event.clientX - shiftX > 500) {
    project.value.pages[0]?.root.children.push({
      id: "widget-text-3",
      type: "h2",
      name: "Заголовок экрана",
      props: { text: "Заголовок" },
      styles: {
        fontSize: "20px",
        fontWeight: "bold",
        color: "#1a1a1a",
        textAlign: "center",
      },
    });
  }

  if (clone) {
    clone.remove();
    clone = null;
  }

  document.removeEventListener("mousemove", onDrag);
  document.removeEventListener("mouseup", stopDrag);
};
</script>

<style lang="scss" scoped>
.widget {
  width: 200px;
  padding: 15px;
  background: #eee;
  border: 1px solid #ccc;
  border-radius: 8px;
  cursor: grab;
}
</style>
