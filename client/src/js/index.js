import { Workbox } from 'workbox-window';
import Editor from './editor';
import './database';
import '../css/style.css';
import logo from '../images/logo.png';

window.addEventListener('load', () => {
  document.getElementById('logo').src = logo;
})
;
const main = document.querySelector('#main');
main.innerHTML = '';

const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
  <div class="loading-container">
  <div class="loading-spinner" />
  </div>
  `;
  main.appendChild(spinner);
};

const editor = new Editor();

if (typeof editor === 'undefined') {
  loadSpinner();
}

// Check if service workers are supported
if ('serviceWorker' in navigator) {
  console.log('here');
  // register workbox service worker
  const workboxSW = new Workbox('./src-sw.js');
  console.log(workboxSW);
  workboxSW.register();
} else {
  console.error('Service workers are not supported in this browser.');
}
