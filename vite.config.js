import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/agrocontrol/',
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'scheduler'],
          supabase: ['@supabase/supabase-js'],
          recharts: ['recharts'],
          'chart-vendor': [
            'd3-array',
            'd3-color',
            'd3-ease',
            'd3-format',
            'd3-interpolate',
            'd3-path',
            'd3-scale',
            'd3-shape',
            'd3-time',
            'd3-time-format',
            'd3-timer',
            'decimal.js-light',
          ],
        },
      },
    },
  },
})
