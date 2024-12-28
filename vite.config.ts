import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  optimizeDeps: {
    include: [
      'lucide-react',
      '@radix-ui/react-icons',
      '@radix-ui/react-tabs',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu'
    ]
  }
});