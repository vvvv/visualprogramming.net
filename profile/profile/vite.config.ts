import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "http://localhost:1313/",
    build: {
      outDir: "../../static/js/vue/",
    rollupOptions: {
      output: {
        entryFileNames: `app.js`,
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      },
      treeshake: true
    },
    target: 'esnext',
    minify: true,
    sourcemap: true
  },
})