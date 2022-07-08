import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  resolve: {
    //设置别名
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    // 导入时忽略的后缀名（默认值）
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/styles/index.scss';`
      }
    }
  },
  server: {
    host: true,
    port: 3005, //启动端口
    // hmr: {
    //   host: '127.0.0.1',
    //   port: 8080
    // },
    hmr: true,
    // 设置 https 代理
    proxy: {
      '^/dev': {
        target: 'http://192.168.31.120:8088',
        secure: false,
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/dev/, '')
      }
    }
  }
})
