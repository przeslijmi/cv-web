import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@contact': path.resolve(__dirname, 'src/contact'),
      '@core': path.resolve(__dirname, 'src/core'),
      '@games': path.resolve(__dirname, 'src/games'),
      '@home': path.resolve(__dirname, 'src/home'),
      '@outcome': path.resolve(__dirname, 'src/outcome'),
    },
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
