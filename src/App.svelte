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
		<span class="prefix">JSONPath: </span><span class="result">{$path}</span>
	</div>
</div>
<div class="main">
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
		display: inline-flex;
		border: 1px solid #ccc;
		min-width: 200px;
	}
	.prefix {
		user-select: none;
	}
	.result {
		user-select: all;
		flex-grow: 1;
	}
	.main {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
	}
	.input {
		font-size: 14px;
	}

	@media screen and (min-width: 600px) {
		.input {
			width: 50vw;
		}
	}

	@media screen and (max-width: 600px) {
		.input {
			width: 100%;
		}
	}
	.json {
		padding-left: 8px;
		height: 100%;
		flex-grow: 1;
		overflow: auto;
	}
</style>
