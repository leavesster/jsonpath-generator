<script context="module" lang="ts">
    export type Primitive = string | number | boolean;
</script>

<script lang="ts">

    export let value: Primitive;
    export let level: number = 0;
    export let inKv: boolean = true;
    export let jsonpath: string = "$";

    const space = " ".repeat(level * 4);

    $: type = typeof value === "boolean" ? "boolean" : typeof value === "number" ? "number" : "string";
</script>


{#if inKv === false}
<span style="white-space: pre;">{space}</span>
{/if}
<span on:click="{() => {console.log(jsonpath)}}" data-value={value} class="{type}">{type === "string" ? "\"" + value + "\"" : value}</span>

<style>
    .string {
        color:goldenrod;
    }
    .number {
        color:cornflowerblue;
    }
    .boolean {
        color:coral
    }
</style>