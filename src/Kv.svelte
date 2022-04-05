<script lang="ts">
    export let key: string;
    export let value: Primitive | ArrayType | ObjType;
    export let level: number = 0;
    const space = " ".repeat(level * 4);

    import Value, {Primitive} from "./Value.svelte";
    import Obj, {ObjType} from "./Obj.svelte";
    import {isArray, isObjType, isPrimitive} from "./types";
    import type { ArrayType } from "./List.svelte";
    import List from "./List.svelte";
</script>

<span style="white-space: pre;">{space}</span>
<span class="key" contenteditable="true">"{key}"</span>:
{#if isArray(value)}
    <List items={value} level={level + 1}></List>
{:else if isObjType(value)}
    <Obj object={value} level={level + 1}></Obj>
{:else if isPrimitive(value)}
    <Value {value} level={level + 1}/>
{/if}

<style>
    .key {
        color:grey;
    }
</style>