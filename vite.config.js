import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: '.',
    assets: [
      {
        src: './src/assets/vloreicon.png',
        type: 'image/png',
        filename: 'vwikiicon.png',
      },
    ],
  },
})