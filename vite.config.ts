import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import ViteFonts from 'vite-plugin-fonts'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import Layouts from 'vite-plugin-vue-layouts'
import path from 'path'
import Pages from 'vite-plugin-pages'
import tsconfigPaths from 'vite-tsconfig-paths'
import ViteComponents from 'vite-plugin-components'

import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    legacy(),
    tsconfigPaths(),
    vue(),
    WindiCSS(),
    ViteFonts({
      google: {
        families: ['Montserrat']
      },
    }),
    vueI18n({
      include: path.resolve(__dirname, './src/locales/**'),
    }),
    Pages(),
    Layouts(),
    ViteComponents(),
  ],
  ssgOptions: {
    script: 'async',
    formatting: 'minify'
  },
  optimizeDeps: {
    include: ['vue', 'vue-router', '@vueuse/core'],
    exclude: ['vue-demi'],
  },
})
