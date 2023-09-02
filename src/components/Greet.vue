<script setup lang="ts">
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/tauri";

const greetMsg = ref("Testing testing, 1, 2, 3.");
const name = ref("");
const winsize = ref({ x: window.innerWidth, y: window.innerHeight });

async function greet() {
  let start = Date.now();
  let msg = await invoke("greet", { name: name.value });
  let time = Date.now() - start;
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  greetMsg.value = `${msg} | ${time}ms`;
}

onresize = () => {
  winsize.value.x = window.innerWidth;
  winsize.value.y = window.innerHeight;
};
</script>

<template>
  <form class="row" @submit.prevent="greet">
    <input id="greet-input" v-model="name" placeholder="Enter a name..." autocomplete="off" />
    <button type="submit">Greet</button>
  </form>
  
  <p>{{ greetMsg }}</p>
  <p>{{ winsize }}</p>
</template>
