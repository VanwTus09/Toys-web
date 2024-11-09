import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/toys-web/', // Tên repo của bạn trên GitHub
  publicDir: false, // Bỏ qua thư mục public .git
  build: {
    rollupOptions: {
      external: ['**/.git/**'], // Bỏ qua tất cả các file trong .git
    },
  },
});
