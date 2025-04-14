import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: path.resolve(__dirname, '../static/vue'),
    emptyOutDir : true,
    assetsDir   : 'assets',
    manifest    : true,
    rollupOptions: {
      // input: path.resolve(__dirname, 'index.html'),
      input: path.resolve(__dirname, 'src/main.js'), // index.html কে ignore করবে
    },
  },
})



//! NOTE:- 
/*
vue.config.js → এটি Vite দিয়ে চলবে না। তাই আমাদের Vite অনুযায়ী vite.config.js-এ build path 
সেট করতে হবে যাতে build output যায় static/vue ফোল্ডারে।

*/
