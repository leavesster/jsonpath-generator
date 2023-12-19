import { writable } from "svelte/store";

export const path = writable("$");
export const fold = writable(false);
export const pathList = writable([]);

(window as any).list = pathList;

fold.subscribe(fold => {
    console.log({fold});
}); 