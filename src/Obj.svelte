<script context="module" lang="ts">
    import type { ArrayType } from "./Items.svelte";
    export type ObjType = {
        [key in string]: Primitive | ArrayType[] | ObjType;
    }
</script>

<script lang="ts">
    import Kv from "./KV.svelte";
    import type {Primitive} from "./Value.svelte";

    export let object: ObjType;
    export let level: number = 0;

    $: keys = Object.keys(object || {});
</script>


{#if keys.length === 0}
<span>{"{}"}</span>
{:else}
    {#each keys as key}
        <Kv key={key} value={object[key]} level={level + 1}></Kv>
    {/each}
{/if}