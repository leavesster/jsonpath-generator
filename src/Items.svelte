<script context="module" lang="ts">
    export type ArrayType = Array<Primitive | ObjType | ArrayType>;
</script>

<script lang="ts">
    import Value, {Primitive} from "./Value.svelte";
    import type {ObjType} from "./Obj.svelte";
    import Obj from "./Obj.svelte";
    import {isArray, isObjType, isPrimitive} from "./types";

    export let items: ArrayType;
    export let level: number = 0;
</script>

{#if items.length === 0}
<span>{"[]"}</span>
{:else}
<span>{"["}</span>
    {#each items as item}
        {#if isArray(item)}
            <svelte:self items={item} level={level + 1}></svelte:self>
        {:else if isObjType(item)}
            <Obj object={item} level={level + 1}></Obj>
        {:else if isPrimitive(item)}
            <Value value={item}></Value>
        {/if}
    {/each}
<span>{"]"}</span>
{/if}