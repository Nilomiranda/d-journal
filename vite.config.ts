import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), vanillaExtractPlugin()]
});
