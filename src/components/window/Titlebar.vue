<script setup lang="ts">
import { ref } from "vue";
import { appWindow } from "@tauri-apps/api/window";

// icons.
import MinimizeIcon from "./../icons/window/Minimize.vue";
import MaximizeIcon from "./../icons/window/Maximize.vue";
import MaximizedIcon from "./../icons/window/Maximized.vue";
import CloseIcon from "./../icons/window/Close.vue";

const title_text = ref("");

const minimize = async () => {
  await appWindow.minimize();
};

const maximize = async () => {
  await appWindow.toggleMaximize();
  changeMaximizeIcon();
};

const changeMaximizeIcon = async () => {
  const maximize_button = document.querySelector(".titlebar-button.maximize");

  if(!maximize_button) {
    console.error("The maximize button doesn't exist?? What??");
    return;
  }

  if(await appWindow.isMaximized())
    maximize_button.setAttribute("maximized", "");
  else
    maximize_button.removeAttribute("maximized");
};

const close = async () => {
  await appWindow.close();
};

window.addEventListener("resize", async () => {
  changeMaximizeIcon();
});
</script>



<template>
  <div class="titlebar">
    <span class="titlebar-title">{{title_text}}</span>
    <div data-tauri-drag-region class="titlebar-drag-region">
    </div>
    <div class="titlebar-buttons">
      <button class="titlebar-button minimize" @click="minimize" context-name="minimize"><MinimizeIcon /></button>
      <button class="titlebar-button maximize" @click="maximize" context-name="maximize"><MaximizeIcon class="maximize-icon" /><MaximizedIcon class="maximized-icon" /></button>
      <button class="titlebar-button close" @click="close" context-name="close"><CloseIcon /></button>
    </div>
  </div>
</template>



<style>
.titlebar {
  z-index: 100;
  position: relative;
  user-select: none;
  display: flex;

  width: 100%;
  height: var(--titlebar-height);
}

.titlebar-drag-region {
  width: calc(100% - var(--calc-titlebar-buttons-width));
  height: 100%;
}

.titlebar-buttons {
  z-index: 200;
  display: flex;
  padding: var(--titlebar-button-padding);
}

.titlebar-button {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  width: var(--titlebar-button-width);
  height: var(--titlebar-button-height);
  
  padding: 0;
  border: none;

  transition-duration: var(--transition-duration);
  transition-property: background-color;
}

.titlebar-button.maximize .maximize-icon {
  display: initial;
}

.titlebar-button.maximize .maximized-icon {
  display: none;
}

.titlebar-button.maximize[maximized] .maximize-icon {
  display: none;
}

.titlebar-button.maximize[maximized] .maximized-icon {
  display: initial;
}
</style>