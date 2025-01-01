import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Manual chunking for better splitting of large files
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'react-vendors'; // Separate React-related libraries
            }
            return 'vendor'; // Other node_modules
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase the warning limit (optional)
  },
});
