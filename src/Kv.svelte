<script lang="ts">
    export let key: string;
    export let value: Primitive | ArrayType | ObjType;
    export let level: number = 0;
    const space = " ".repeat(level * 4);

    import Value, {Primitive} from "./Value.svelte";
    import Obj, {ObjType} from "./Obj.svelte";
    import {isArray, isObjType, isPrimitive} from "./types";
    import type { ArrayType } from "./Items.svelte";
    import Items from "./Items.svelte";
</script>

<div data-type="kv" data-level={level}>
    <span style="white-space: pre;">{space}</span>
    <span class="key" contenteditable="true">"{key}"</span>:
    {#if isArray(value)}
        <Items items={value} level={level + 1}></Items>
    {:else if isObjType(value)}
        <Obj object={value} level={level + 1}></Obj>
    {:else if isPrimitive(value)}
        <Value {value}/>
    {/if}
</div>

<style>
    .key {
        color:grey;
    }
</style>