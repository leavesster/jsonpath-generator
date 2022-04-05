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
    import {fold} from "./jsonpath";

    export let object: ObjType;
    export let level: number = 0;
    export let inList: boolean = false;
    export let jsonpath: string = "$";

    const space = " ".repeat(level * 4);

    $: keys = Object.keys(object || {});

    function click() {
        needFold = !needFold;
    }

    $: needFold = $fold && level !== 0;

</script>

{#if inList}
<span style="white-space: pre;">{space}</span>
{/if}
{#if keys.length === 0}
<span>{"{}"}</span>
{:else if needFold === true}
<span on:click={click} style="cursor:pointer;">Object[{keys.length}]</span>
{:else}
<span on:click={click} style="cursor:pointer;">{"{"}</span>
    <br>
    {#each keys as key, i}
        {@const subpath = jsonpath + "." + key}
        <Kv key={key} value={object[key]} level={level + 1}  jsonpath={subpath}></Kv>
        {#if i < keys.length - 1}
            <Comma></Comma>
        {/if}
    {/each}
<br>
<span style="white-space: pre;">{space}{"}"}</span>
{/if}