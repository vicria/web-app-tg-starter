import { createApp } from 'vue';

import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import TgButton from './components/UI/TgButton.vue';
import MainButton from './components/UI/MainButton.vue';
import App from './App.vue';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('tg-button', TgButton);
app.component('main-tg-button', MainButton);

app.mount('#app');
