import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The GitHub Pages URL is https://<user>.github.io/<repo>/, so the build needs
// the repo name as its base path. Override with BASE_PATH if the repo is
// renamed, e.g. `BASE_PATH=/mi-repo/ pnpm run build`.
const basePath = process.env.BASE_PATH ?? '/vistazu-2007/'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? basePath : '/',
  plugins: [react()],
}))
