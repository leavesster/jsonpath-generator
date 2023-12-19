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
    import { path } from "./jsonpath";

    
    export let jsonpath: string = "$";
    function showPath() {
        path.update(n => n = jsonpath);
    }
</script>

<span style="white-space: pre;">{space}</span>
<span class="key" style="cursor:pointer;" on:click={showPath} on:keydown={showPath}>"{key}"</span>:
{#if isArray(value)}
    <List items={value} level={level + 1} jsonpath={jsonpath}></List>
{:else if isObjType(value)}
    <Obj object={value} level={level + 1} jsonpath={jsonpath}></Obj>
{:else if isPrimitive(value)}
    <Value {value} level={level + 1} jsonpath={jsonpath}/>
{/if}

<style>
    .key {
        color:var(--vscode-editor-foreground);
    }
</style>