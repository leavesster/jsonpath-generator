<script lang="ts">
	import {path, fold} from "./jsonpath";
    import Json from "./Json.svelte"
    import {i18n} from "./i18";
    import {json} from "./jsonpath"
    let title = i18n("fold.title");
    window.json = json;
</script>

<div class="jsonpath">
	<label class="options"><input type="checkbox" name="fold" bind:checked={$fold}> {title} </label>
	<div class="path">
		<span class="prefix">JSONPath: </span><span class="result">{$path}</span>
	</div>
</div>
<div class="main">
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
	@media screen and (min-width: 600px) {
		.main {
			flex-wrap: nowrap;
		}
	}
    :global(body) {
        background-color: var(--vscode-editor-background);
        color:var(--vscode-editor-foreground);
    }

    :global(.key) {
        color:var(--vscode-editor-foreground);
    }
    :global(.folded::before) {
        background-color: var(--vscode-editor-foreground);
    }
    :global(.unfolded::before) {
        background-color: var(--vscode-editor-foreground);
    }
</style>
