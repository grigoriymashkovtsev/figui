import App from './App.svelte';
import './app.css';

const app = new App({
    // @ts-ignore
    target: document.getElementById('app'),
});

export default app;
