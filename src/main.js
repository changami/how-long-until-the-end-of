import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		appName: 'How long until the end of...?'
	}
});

export default app;
