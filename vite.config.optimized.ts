import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'i18n-vendor': ['react-i18next', 'i18next', 'i18next-browser-languagedetector'],
          'icons-vendor': ['react-icons/fa', 'react-icons/io5', 'lucide-react'],
          'ui-vendor': ['@radix-ui/react-slot', 'clsx', 'tailwind-merge', 'class-variance-authority'],
          'carousel-vendor': ['embla-carousel-react', 'embla-carousel-autoplay'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
      },
    },
  },
  server: {
    port: 5173,
    host: true,
    open: false,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-i18next'],
  },
})