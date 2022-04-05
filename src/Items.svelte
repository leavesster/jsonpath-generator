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
    const space = " ".repeat(level * 4);

</script>

{#if items.length === 0}
<span>{"[]"}</span>
{:else}
<span>{"["}<br></span>
    {#each items as item, i}
        {#if isArray(item)}
            <svelte:self items={item} level={level + 1}></svelte:self>
        {:else if isObjType(item)}
            <Obj object={item} level={level + 1} inList={true}></Obj>
        {:else if isPrimitive(item)}
            <Value value={item} level={level + 1} inKv={false}></Value>
        {/if}
        {#if i < items.length - 1}
            ,<br>
        {/if}
    {/each}
<span style="white-space: pre;"><br>{space}{"]"}</span>
{/if}