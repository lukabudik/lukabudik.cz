import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans'],
    },
    extend: {
      gridAutoColumns: {
        '3fr': 'minmax(300px, 3fr)',
      },
    },
  },
})
