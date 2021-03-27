import { createApp } from 'vue'
import App from './App.vue'
import { setupLayouts } from 'layouts-generated'
// eslint-disable-next-line prettier/prettier
import 'windi.css'
import NProgress from 'nprogress'

import { createI18n } from 'vue-i18n'
import { createRouter, createWebHistory } from 'vue-router'
import generatedRoutes from 'pages-generated'

import en from './locales/en.json'
import cs from './locales/cs.json'
import { getBrowserLocale } from './logics/utils/getBrowserLocale'

const i18n = createI18n({
  locale: getBrowserLocale({ countryCodeOnly: true }),
  messages: {
    en,
    cs,
  },
})

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(() => {
  NProgress.start()
})
router.afterEach(() => {
  NProgress.done()
})

const app = createApp(App)

app.use(i18n)
app.use(router)
app.mount('#app')
