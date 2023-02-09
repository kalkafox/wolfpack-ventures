import { defineConfig } from 'astro/config'

// https://astro.build/config
import partytown from '@astrojs/partytown'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), partytown()],
  site: 'https://kalkafox.github.io',
  base: '/wolfpack-ventures',
  output: 'static',
})
