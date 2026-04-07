import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import babel from '@rolldown/plugin-babel'

export default defineConfig({
	plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
	server: {
		proxy: {
			'/api': {
				target: 'https://api.annur.com.kg',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '/ru'),
			},
		},
	},
})
