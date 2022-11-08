import Button from '@/components/Button.vue';
import '@/scss/index.scss';
import { createApp } from 'vue';
import App from './App.vue';
import { client } from './config/axios';
import './registerServiceWorker';
import { router } from './router';
import { store } from './store';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { worker } = require('./mocks/browser');
  worker.start();
}

const app = createApp(App);

app.use(store);

app.use(router);

app.provide('$api', client);

app.component('cs-button', Button);

app.mount('#app');
