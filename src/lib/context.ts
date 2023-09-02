// scan 
export const scanForContext = (event: MouseEvent): void => {
  const { target } = event;

  const noTarget = (): void => {
    window.context_name.value = "";
    window.context_shortcut.value = "";
    return;
  };

  if(!target)
    return noTarget();

  const closest_context_element = (event.target as Element).closest("[context-name]");

  if(!closest_context_element)
    return noTarget();

  const context_name = closest_context_element.getAttribute("context-name")!;
  const context_shortcut = closest_context_element.getAttribute("context-shortcut")!;

  console.log(context_name, context_shortcut);

  window.context_name.value = context_name;
  window.context_shortcut.value = context_shortcut;
};