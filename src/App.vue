<script setup lang="ts">

import { onMounted, ref, Ref } from "vue";
import { appWindow } from "@tauri-apps/api/window";



// globals.
declare global {
  interface Window {
    terminal_loaded: boolean,
    context_name: Ref<String>,
    context_shortcut: Ref<String>,
  }
}

window.terminal_loaded = false;
window.context_name = ref("");
window.context_shortcut = ref("");



// lib imports.

import { scanForContext } from "./lib/context";


// modules.
//import { Store } from "tauri-plugin-store-api";
import EdgeMargins from "./components/window/EdgeMargins.vue";
import Titlebar from "./components/window/Titlebar.vue";
import Statusbar from "./components/window/Statusbar.vue";

//import TestFaceTracking from "./components/TestFaceTracking.vue";

//const window_close_icon_fill = ref("#00ff00");

//const store = new Store(".settings.dat");




addEventListener("mouseover", scanForContext);



// show window on load.
onMounted(() => {
  appWindow.show();
});
</script>



<template>
  <EdgeMargins />
  <Titlebar />
  
  <div class="container">
  </div>

  <Statusbar />
</template>