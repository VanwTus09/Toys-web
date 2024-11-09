import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/toys-web/',  // Đảm bảo base path đúng với cấu trúc URL trên Vercel
  publicDir: false, // Bỏ qua thư mục public .git
  build: {
    outDir: 'dist', // Thư mục xuất ra

    rollupOptions: {
      external: ['**/.git/**'], // Bỏ qua tất cả các file trong .git
    },
  },
});
