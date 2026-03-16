import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  // phaser-ce uses CommonJS, Vite needs to pre-bundle it
  optimizeDeps: {
    include: [
      'phaser-ce/build/custom/pixi',
      'phaser-ce/build/custom/p2',
      'phaser-ce/build/custom/phaser-split'
    ]
  }
})
