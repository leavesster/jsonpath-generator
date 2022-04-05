<script lang="ts">
	export let value: string = '';
	import Obj from "./Obj.svelte";
	import List from "./List.svelte";
	import {path, fold} from "./jsonpath";

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

<div class="jsonpath">
	<label class="options"><input type="checkbox" name="fold" bind:checked={$fold}>折叠子项</label>
	<div class="path">
		<span class="prefix">JSONPath: </span><span>{$path}</span>
	</div>
</div>
<div>
	<textarea class="input" bind:value={value}></textarea>
	<div class="json">
	{#key result && result !== ""}
		{#if Array.isArray(result)}
			<List items={result}/>
		{:else}
			<Obj object={result}></Obj>
		{/if}
	{/key}
	</div>
</div>

<style>
	.options {
		display: inline;
		user-select: none;
	}
	.path {
		display: inline-block;
		border: 1px solid #ccc;
		min-width: 200px;
	}
	.prefix {
		user-select: none;
	}
	textarea {
		width: 400px;
		font-family: monospace;
		font-size: 14px;
		float: left;
		height: calc(100vh - 50px);
	}
	.json {
		padding-left: 8px;
		height: 100%;
		overflow: auto;
	}
</style>