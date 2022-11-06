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

app.mount('#app');
