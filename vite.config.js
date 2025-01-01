export default defineConfig({
  base: './', // Ensures assets are loaded correctly
  plugins: [react()],
  server: {
    port: 10000,  // Add this line to specify the correct port
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
