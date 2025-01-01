import { defineConfig } from 'vite'; // Ensure defineConfig is imported
import react from '@vitejs/plugin-react'; // Ensure react plugin is imported

export default defineConfig({
  base: './', // Ensures assets are loaded correctly in Firebase Hosting
  plugins: [react()],
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
