import Avatar from '@/components/Avatar.vue';
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon.vue';
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

app.component('cs-icon', Icon);

app.component('cs-avatar', Avatar);

app.mount('#app');
