// modules.
import { appDataDir, appConfigDir } from '@tauri-apps/api/path';
import { Store } from "tauri-plugin-store-api";



// globals.
declare global {
  interface Window {
    readonly settings_active: boolean,

    toggleSettings: () => boolean, // @returns if settings was opened (true) or closed (false).
  }
}



// vars.
const app_data_dir = await appDataDir();
const app_config_dir = await appConfigDir();



// methods.
const toggleSettings = (): boolean => {
  return true;
};



// exports.
Object.assign(window, {
  toggleSettings,
});