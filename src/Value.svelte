<script context="module" lang="ts">
    export type Primitive = string | number | boolean;
</script>

<script lang="ts">
    export let value: Primitive;

    $: type = typeof value === "boolean" ? "boolean" : typeof value === "number" ? "number" : "string";
</script>


<span contenteditable="true" data-value={value} class="{type}">{type === "string" ? "\"" + value + "\"" : value}</span>

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