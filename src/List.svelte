<script context="module" lang="ts">
    export type ArrayType = Array<Primitive | ObjType | ArrayType>;
</script>

<script lang="ts">
    import Value, {Primitive} from "./Value.svelte";
    import type {ObjType} from "./Obj.svelte";
    import Obj from "./Obj.svelte";
    import {isArray, isObjType, isPrimitive} from "./types";
    import Comma from "./Comma.svelte";
    import {fold} from "./jsonpath";

    export let items: ArrayType;
    export let level: number = 0;
    export let jsonpath: string = "$";

    const space = " ".repeat(level * 4);

    function click() {
        needFold = !needFold;
    }

    $: needFold = $fold && level !== 0;

</script>

{#if items.length === 0}
<span>{"[]"}</span>
{:else if needFold === true}
<span on:click={click} on:keydown={click} style="cursor:pointer;" class="folded">Array[{items.length}]</span>
{:else}
<span on:click={click} on:keydown={click} style="cursor:pointer;"  class="unfolded">{"["}<br></span>
    {#each items as item, i}
        {@const subpath = jsonpath + "[" + i + "]"}
        {#if isArray(item)}
            <svelte:self items={item} level={level + 1} jsonpath={subpath}></svelte:self>
        {:else if isObjType(item)}
            <Obj object={item} level={level + 1} inList={true} jsonpath={subpath}></Obj>
        {:else if isPrimitive(item)}
            <Value value={item} level={level + 1} inKv={false} jsonpath={subpath}></Value>
        {/if}
        {#if i < items.length - 1}
            <Comma></Comma>
        {/if}
    {/each}
<span style="white-space: pre;"><br>{space}{"]"}</span>
{/if}