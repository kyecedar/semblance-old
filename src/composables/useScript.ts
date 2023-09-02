import { onUnmounted } from "vue";


// https://www.youtube.com/watch?v=9dH34iADzwE 🙏 thank you.
export default function(src: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    // get script if it exists.
    let script = document.querySelector(`script[src="${src}"]`) || document.createElement("script");

    // if script didn't exist, create it.
    if(!document.head.contains(script)) {
      script.setAttribute("src", src);
      script.setAttribute("async", "");
      script.setAttribute("data-status", "loading");
      document.head.append(script);
    }

    // if script has already been loaded, resolve.
    if(script.getAttribute("data-status") === "loaded") resolve();

    // listener callbacks.
    function onLoad() {
      resolve();
      script.setAttribute("data-status", "loaded");
    };
    
    function onError() {
      reject();
      script.setAttribute("data-status", "error");
    };

    // listeners.
    script.addEventListener("load", onLoad);
    script.addEventListener("error", onError);

    // remove listeners and element on unmount.
    onUnmounted(() => {
      if(document.head.contains(script)) {
        script.removeEventListener("load", onLoad);
        script.removeEventListener("error", onError);
        document.head.removeChild(script);
      }
    });
  });
}