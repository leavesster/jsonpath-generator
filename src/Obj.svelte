<script context="module" lang="ts">
    import type { ArrayType } from "./List.svelte";
    export type ObjType = {
        [key in string]: Primitive | ArrayType[] | ObjType;
    }
</script>

<script lang="ts">
    import Comma from "./Comma.svelte";
    import Kv from "./Kv.svelte";
    import type {Primitive} from "./Value.svelte";

    export let object: ObjType;
    export let level: number = 0;
    export let inList: boolean = false;
    const space = " ".repeat(level * 4);

    $: keys = Object.keys(object || {});
</script>

{#if inList}
<span style="white-space: pre;">{space}</span>
{/if}
{#if keys.length === 0}
<span>{"{}"}</span>
{:else}
<span>{"{"}</span>
    <br>
    {#each keys as key, i}
        <Kv key={key} value={object[key]} level={level + 1}></Kv>
        {#if i < keys.length - 1}
            <Comma></Comma>
        {/if}
    {/each}
<br>
<span style="white-space: pre;">{space}{"}"}</span>
{/if}