import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react-swc';
import eslint from 'vite-plugin-eslint';
import unocss from 'unocss/vite';
import wasm from 'vite-plugin-wasm';

// https://vitejs.dev/config/
export default defineConfig({
  // https://github.com/vitejs/awesome-vite#plugins
  plugins: [unocss(), wasm(), react(), eslint()],
  server: {
    host: '0.0.0.0',
    port: 6012,
  },

  resolve: {
    alias: {
      // 设置别名后如果是typescript则必须在tsconfig.json中配置baseUrl和paths，否者ts类型会报错
      '~': resolve(__dirname, 'src'),
    },
  },
});
