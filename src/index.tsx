import {h, render} from 'preact';
import {App} from './App';

new EventSource('/esbuild').addEventListener('change', () => location.reload())

render(<App />, document.body);