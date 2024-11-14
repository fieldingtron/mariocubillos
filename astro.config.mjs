import { defineConfig } from 'astro/config'
import icon from 'astro-icon'

export default defineConfig({
  integrations: [
    icon(),
    /* other integrations */
  ],
  vite: {
    css: {
      preprocessorOptions: {
        css: {
          additionalData: `@import "./src/styles/global.css";`,
        },
      },
    },
  },
})
