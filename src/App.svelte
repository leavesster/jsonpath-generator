<script lang="ts">
	export let value: string = '{"a": {}, "b": []}';
	import Obj from "./Obj.svelte";
	import Items from "./Items.svelte";

	function parse(str: string) {
		try {
			return JSON.parse(str);
		} catch (e) {
			console.error("parse json error:", e);
			return "";
		}
	}
	$: result = parse(value);
</script>

<textarea bind:value={value}></textarea>
<div>
{#key result && result !== ""}
	{#if Array.isArray(result)}
		<Items items={result}/>
	{:else}
		<Obj object={result}></Obj>
	{/if}

{/key}
</div>

<style>
	textarea {
		width: 200px;
		height: 100%;
		font-family: monospace;
		font-size: 14px;
		float: left;
	}
	div {
		padding-left: 8px;
		height: 100%;
		overflow: auto;
	}
</style>