import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // publicDir: false, // Bỏ qua thư mục public .git
  base: '/',
  build: {
    outDir: 'dist', // Thư mục xuất ra
    // rollupOptions: {
    //   external: ['**/.git/**'], // Bỏ qua tất cả các file trong .git
    // },
  },
});
