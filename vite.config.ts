import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit(), basicSsl()],
	resolve: {
		alias: {
			'@': path.resolve('./src'),
			$lib: path.resolve('./src/lib'),
			$shared: path.resolve('./src/lib/shared')
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler'
			}
		}
	}
});
