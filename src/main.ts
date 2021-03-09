import { createApp } from 'vue'
import App from './App.vue'
import 'windi.css'

import { createI18n } from 'vue-i18n'
import { createRouter, createWebHistory } from 'vue-router';
import routes from 'pages-generated';


import en from './locales/en.json'
import cs from './locales/cs.json'

const i18n = createI18n({
    locale: 'en',
    messages: {
      en,
      cs
    }
  })

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App)

app.use(i18n)
app.use(router)
app.mount('#app')
