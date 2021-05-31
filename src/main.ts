import App from './App.vue'
import { setupLayouts } from 'layouts-generated'
import 'windi.css'
import { ViteSSG } from 'vite-ssg'
import NProgress from 'nprogress'

// generate pages
import { createI18n } from 'vue-i18n'
import { createRouter, createWebHistory } from 'vue-router'

// @ts-ignore
import generatedRoutes from 'pages-generated'
const routes = setupLayouts(generatedRoutes)

//setup i18n
import en from './locales/en.json'
import cs from './locales/cs.json'
import { getBrowserLocale } from './logics/utils/getBrowserLocale'

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, routes, isClient, initialState }) => {
    if (isClient) {
      router.beforeEach(() => {
        NProgress.start()
      })
      router.afterEach(() => {
        NProgress.done()
      })
    }
    const i18n = createI18n({
      locale: isClient ? getBrowserLocale() : 'cs',
      fallbackLocale: 'cs',
      messages: {
        en,
        cs,
      },
    })
    app.use(i18n)
  },
)
