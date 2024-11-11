import { defineConfig } from 'astro/config'

export default defineConfig({
  integrations: [
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
