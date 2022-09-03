<script context="module" lang="ts">
    export type Primitive = string | number | boolean;
</script>

<script lang="ts">

    export let value: Primitive;
    export let level: number = 0;
    export let inKv: boolean = true;
    export let jsonpath: string = "$";
    import { path } from "./jsonpath";

    const space = " ".repeat(level * 4);

    $: type = typeof value === "boolean" ? "boolean" : typeof value === "number" ? "number" : "string";
    function showPath() {
        path.update(n => n = jsonpath);
    }
</script>


{#if inKv === false}
<span style="white-space: pre;">{space}</span>
{/if}
<span on:click={showPath} data-value={value} class="{type}">{type === "string" ? "\"" + value + "\"" : value}</span>

<style>
    .string {
        color:#fce38a;
    }
    .number {
        color:#95e1d3;
    }
    .boolean {
        color:#95e1d3
    }
</style>