<script lang="ts">
    import { writable } from "svelte/store";
	import Obj from "./Obj.svelte";
	import List from "./List.svelte";
	import {path, fold, pathList, showPathList} from "./jsonpath";

    export let value: string;
    export let list = [];
    export let showPathListDiv = false;

    const json = writable(JSON.parse(value));

    window.json = json;
    window.showPathList = showPathList;

    var result: any
	$: {
        pathList.set([]);
        // FIXME: if put this same value, pathList will keep empty
        result = $json;
    }
    $: list = $pathList;
    $: showPathListDiv = $showPathList;
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
{#if showPathListDiv}
    "pathList": <span class="jsonpath-list">{list}</span>
{/if}

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
    .jsonpath-list {
        user-select: all;
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
		/* height: 100%; */
		flex-grow: 1;
		overflow: auto;
	}
    :global(.folded::before) {
        background-color: var(--vscode-editor-foreground)
    }

    :global(.unfolded::before) {
        background-color: var(--vscode-editor-foreground)
    }
    :global(body) {
        background-color: var(--vscode-editor-background);
        color:var(--vscode-editor-foreground);
    }
    :global(.folded::before) {
        content: "";
        -webkit-mask-image: url(../assets/folded.svg);
        mask-image: url(../assets/folded.svg);
        -webkit-mask-size: cover;
        mask-size: cover;
        vertical-align: middle;
        background-size: contain;
        width: 15px;
        height: 15px;
        display: inline-block;
    }
    :global(.unfolded::before) {
        content: "";
        -webkit-mask-image: url(../assets/folded.svg);
        mask-image: url(../assets/folded.svg);
        -webkit-mask-size: cover;
        mask-size: cover;
        vertical-align: middle;
        background-size: contain;
        width: 15px;
        height: 15px;
        display: inline-block;
    }
</style>
