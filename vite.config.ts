import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    svgr(),
    react()
  ],
  server: {
    allowedHosts: true,
    proxy: {
      '/api': {
        target: 'http://traefik',
        changeOrigin: true,
      },
    }
  }
});