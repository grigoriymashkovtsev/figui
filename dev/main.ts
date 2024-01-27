import App from './App.svelte';

// let theme: 'light' | 'dark' = 'light';

// if (theme === 'light') {
//     import('./light.css');
// } else {
//     import('./dark.css');
// }
import './app.css';

const app = new App({
    // @ts-ignore
    target: document.getElementById('app'),
});

export default app;
