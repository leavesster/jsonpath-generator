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
    $: isString = typeof value === "string";

    function showPath() {
        path.set(jsonpath);
    }
</script>


{#if inKv === false}
<span style="white-space: pre;">{space}</span>
{/if}
<span
    on:click={showPath}
    on:keydown={showPath}
    tabindex="0"
    role="button"
    class="{type} {isString ? 'string-content' : ''}"
>{type === "string" ? "\"" + value + "\"" : value}</span>

<style>
    .string {
        color:#f08a5d;
    }
    .number {
        color:#46cdcf;
    }
    .boolean {
        color:#3d84a8
    }
    .string-content {
        display: inline-block;
        max-width: min(960px, 100%);
        vertical-align: top;
        white-space: pre-wrap;
        overflow-wrap: anywhere;
        word-break: break-word;
    }
</style>
