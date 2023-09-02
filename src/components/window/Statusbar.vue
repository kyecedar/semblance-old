<script setup lang="ts">

import TerminalIcon from "./../icons/Terminal.vue";
import SettingsIcon from "./../icons/Settings.vue";

const { context_name, context_shortcut } = window;

let terminal_shown = false;
let settings_shown = false;

const toggleSettings = (): void => {
  settings_shown = !settings_shown;
  console.log("Settings toggled.", settings_shown ? "shown." : "hidden.");
};

const toggleTerminal = (): void => {
  terminal_shown = !terminal_shown;
  console.log("Terminal toggled.", terminal_shown ? "shown." : "hidden.");
};

</script>



<template>
  <div class="statusbar">
    <div class="left">
      <button class="settings-button" @click="toggleSettings" context-name="settings" context-shortcut="ctrl+,">
        <SettingsIcon />
      </button>
      <div class="context">
        <div class="context-name">{{ context_name }}</div>
        <div class="context-shortcut">{{ context_shortcut }}</div>
      </div>
    </div>
    <div class="center" />
    <div class="right">
      <button class="terminal-button" @click="toggleTerminal" context-name="terminal" context-shortcut="ctrl+`">
        <TerminalIcon />
      </button>
    </div>
  </div>
</template>



<style>
.statusbar {
  display: flex;

  width: 100vw;
  height: var(--statusbar-height);

  column-gap: var(--statusbar-spacing);

  user-select: none;
}

.statusbar button {
  cursor: pointer;
  height: var(--statusbar-height);
  width: auto;
}

/*********************************/
/* LEFT **************************/
/*********************************/
.statusbar .left {
  display: flex;

  justify-content: flex-start;
  align-items: center; /* y axis */
}

.statusbar .context {
  display: flex;
  column-gap: var(--statusbar-context-spacing);
  align-items: center;
}

.statusbar .context .context-name {
  margin-left: var(--statusbar-spacing);
  font-weight: 700;
}

.statusbar .context .context-shortcut {
  padding: var(--statusbar-context-shortcut-padding);
  border-radius: var(--statusbar-context-shortcut-border-radius);
}

.statusbar .context .context-name:empty,
.statusbar .context .context-shortcut:empty {
  display: none;
}

/*********************************/
/* CENTER ************************/
/*********************************/
.statusbar .center {
  flex: 1;
  align-items: center;
}

/*********************************/
/* RIGHT *************************/
/*********************************/
.statusbar .right {
  display: flex;
  justify-content: flex-end;
  align-items: center; /* y axis */

  /* margin-right: var(--statusbar-spacing); */
}
</style>