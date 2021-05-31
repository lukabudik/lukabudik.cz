import { createApp } from 'vue'
import App from './App.vue'
import { setupLayouts } from 'layouts-generated'
import firebase from 'firebase'
import { config } from 'config/firebase'
import 'windi.css'
import NProgress from 'nprogress'

// initialize firebase
firebase.initializeApp(config)

// generate pages
import { createI18n } from 'vue-i18n'
import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import generatedRoutes from 'pages-generated'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(() => {
  NProgress.start()
})
router.afterEach(() => {
  NProgress.done()
})

const app = createApp(App)

app.use(router)

//setup i18n
import { getBrowserLocale } from './logics/utils/getBrowserLocale'

firebase
  .firestore()
  .collection('translations')
  .get()
  .then((snapshot) => {
    const en = Object.fromEntries(
      snapshot.docs.map((doc) => [doc.id, doc.data().translation.en]),
    )
    const cs = Object.fromEntries(
      snapshot.docs.map((doc) => [doc.id, doc.data().translation.cs]),
    )
    const i18n = createI18n({
      locale: getBrowserLocale() ?? 'en',
      fallbackLocale: 'en',
      messages: {
        en,
        cs,
      },
    })
    app.use(i18n)
    app.mount('#app')
  })
