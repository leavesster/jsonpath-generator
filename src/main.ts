import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		value: `
{
	"a": 1,
	"b": "a",
	"c": true,
	"d": {},
	"e": [],
	"a1": {
		"a": 1,
		"b": "a",
		"c": true
	},
	"b2": [
		1,
		"a",
		true
	]
}
		`
	}
});

export default app;