import { createApp } from 'vue'
import App from './App.vue'
import 'windi.css'

import { createI18n } from 'vue-i18n'

import en from './locales/en.json'
import cs from './locales/cs.json'

const i18n = createI18n({
    locale: 'cs',
    messages: {
      en,
      cs
    }
  })

const app = createApp(App)

app.use(i18n).mount('#app')
