import { writable } from "svelte/store";

export const path = writable("$");
export const fold = writable(false);
export const json = writable({});