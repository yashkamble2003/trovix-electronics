import { defineConfig } from 'vite'; // Ensure this is included

export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    port: 10000,  // Correct port for deployment
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'react-vendors';
            }
            return 'vendor';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
