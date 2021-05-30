import { createApp } from 'vue'
import App from './App.vue'
import { setupLayouts } from 'layouts-generated'
import firebase from 'firebase'
import {config} from 'config/firebase'
// eslint-disable-next-line prettier/prettier
import 'windi.css'
import NProgress from 'nprogress'

// generate pages
import { createI18n } from 'vue-i18n'
import { createRouter, createWebHistory } from 'vue-router'
import generatedRoutes from 'pages-generated'

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

//setup i18n
import { getBrowserLocale } from './logics/utils/getBrowserLocale'
import en from './locales/en.json'
import cs from './locales/cs.json'

const i18n = createI18n({
  locale: getBrowserLocale() ?? "en",
  defaultLocale: "en",
  messages: {
    en,
    cs,
  },
})

// initialize firebase
firebase.initializeApp(config)

const app = createApp(App)

app.use(i18n)
app.use(router)
app.mount('#app')

