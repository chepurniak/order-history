import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import * as path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        transformAssetUrls,
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('-'),
        },
      },
    }),
    quasar({
      autoImportComponentCase: 'pascal',
      sassVariables: 'src/styles/quasar-variables.scss', 
    }),
  ],
  resolve: { 
    alias: { 
      '~quasar': 'quasar', 
      '@/': `${path.resolve(__dirname, 'src')}/`, 
      'src/': `${path.resolve(__dirname, 'src')}/`, 
    }, 
  },
})
