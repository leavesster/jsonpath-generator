<script lang="ts">
    import { writable } from "svelte/store";
	import Obj from "./Obj.svelte";
	import List from "./List.svelte";
	import {path, fold} from "./jsonpath";
    // import unfolded from "../assets/unfolded.svg";

    const json = writable({json: true});
    window.json = json;

	$: result = $json as any;
</script>

<div class="jsonpath">
	<label class="options"><input type="checkbox" name="fold" bind:checked={$fold}>折叠子项</label>
	<div class="path">
		<span class="prefix">JSONPath: </span><span class="result">{$path}</span>
	</div>
</div>
<div class="json">
	{#key result && result !== ""}
		{#if Array.isArray(result)}
			<List items={result}/>
		{:else}
			<Obj object={result}></Obj>
		{/if}
	{/key}
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
		align-items: flex-start;
	}
	.input {
		font-size: 14px;
	}

	@media screen and (min-width: 600px) {
		.main {
			flex-wrap: nowrap;
		}
		.input {
			width: 50%;
			flex-shrink: 0;
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
    :global(body) {
        background-color: var(--vscode-editor-background);
        color:var(--vscode-editor-foreground);
    }
    :global(.folded::before) {
        content: "";
        background:  url(../assets/folded.svg);
        background-size: 10px;
        background-size: contain;
        width: 15px;
        height: 15px;
        display: inline-block;
    }
    :global(.unfolded::before) {
        content: "";
        background:  url(../assets/unfolded.svg);
        background-size: 10px;
        background-size: contain;
        width: 15px;
        height: 15px;
        display: inline-block;
    }
</style>
