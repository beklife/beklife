// @ts-check
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'

import sitemap from '@astrojs/sitemap'

import react from '@astrojs/react'

import tailwind from '@astrojs/tailwind'

import expressiveCode from 'astro-expressive-code'

import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  site: 'https://beklife.github.io',
  base: '/',
  integrations: [
    tailwind(),
    react(),
    icon(),
    sitemap(),
    expressiveCode(),
    mdx(),
  ],
})
