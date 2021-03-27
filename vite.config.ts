import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import ViteFonts from 'vite-plugin-fonts'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import Layouts from 'vite-plugin-vue-layouts';
import path from "path"
import Pages from 'vite-plugin-pages'
import ViteComponents from 'vite-plugin-components'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    ViteFonts({
      google: {
        families: ['Montserrat']
      },
    }),
    vueI18n({
      include: path.resolve(__dirname, './src/locales/**')

    }),
    Pages(),
    Layouts(),
    ViteComponents(),
  ]

})
