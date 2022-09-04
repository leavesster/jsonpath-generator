<script lang="ts">
    export let result: any = "";
	import Obj from "./Obj.svelte";
	import List from "./List.svelte";
    import { json } from "./jsonpath";

	$: result = $json as any;
</script>

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
	.json {
		padding-left: 8px;
		height: 100%;
		flex-grow: 1;
		overflow: auto;
	}
    :global(.folded::before) {
        content: "";
        -webkit-mask-image:  url(../assets/folded.svg);
        mask-image:  url(../assets/folded.svg);
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
        -webkit-mask-image: url(../assets/unfolded.svg);
        mask-image:  url(../assets/unfolded.svg);
        -webkit-mask-size: cover;
        mask-size: cover;
        vertical-align: middle;
        background-size: contain;
        width: 15px;
        height: 15px;
        display: inline-block;
    }
</style>
