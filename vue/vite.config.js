import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
      vue()
    ],
    base: "http://localhost:1313/",
    build: {
      outDir: "../static/js/vue/",
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