import { writable } from "svelte/store";

export const path = writable("$");
export const fold = writable(false);
export const pathList = writable([]);
export const showPathList = writable(false);

fold.subscribe(fold => {
    console.log({fold});
}); 