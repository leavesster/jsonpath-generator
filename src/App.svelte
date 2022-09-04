<script lang="ts">
	export let value: string = '';
	import {path, fold, json} from "./jsonpath";
	import { onMount } from "svelte";
    import Json from "./Json.svelte"
    import {i18n} from "./i18";

	function parse(str: string) {
		try {
			return JSON.parse(str);
		} catch (e) {
			console.error("parse json error:", e);
			return "";
		}
	}

	let el: HTMLTextAreaElement;
	function autoHeight() {
		el.style.height = "auto";
		el.style.height = `${Math.max(el.scrollHeight, 200)}px`;
		console.log(`autoHeight: ${el.scrollHeight}px`);
	}

	$: json.set(parse(value));
    let title = i18n("fold.title");

	onMount(() => {
		autoHeight();
	});
</script>

<div class="jsonpath">
	<label class="options"><input type="checkbox" name="fold" bind:checked={$fold}> {title} </label>
	<div class="path">
		<span class="prefix">JSONPath: </span><span class="result">{$path}</span>
	</div>
</div>
<div class="main">
	<textarea class="input" type="text" on:input={autoHeight} bind:this={el} bind:value={value}></textarea>
    <Json></Json>
</div>

<style>
	.options {
		display: inline;
		user-select: none;
	}
	.path {
		display: inline-flex;
		min-width: 200px;
	}
	.prefix {
		user-select: none;
	}
	.result {
        border: 1px solid #ccc;
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
