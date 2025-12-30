import { defineConfig } from "vite";
import { resolve } from 'path'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                logistics: resolve(__dirname, 'logistics.html'),
                training: resolve(__dirname, 'training.html'),
                chemical: resolve(__dirname, 'paint-chemicals.html')
            }
        }
    }
})