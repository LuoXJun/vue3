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
    }
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
  server: {
    host: '0.0.0.0',
    port: 8080, //启动端口
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
