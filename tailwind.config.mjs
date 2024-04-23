/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		animation: {
			spin: 'spin 4s linear infinite',
		  },

		backgroundImage: {
		  'hero-image': 'url("src/image/fondo-banner-inicio.webp")',
		  'hero-image-mobile': 'url("src/image/fondo-banner-mobile.webp")',
		  'fondo-servicios-mobile': 'url("src/image/fondo-servicios.webp")',
		  'fondo-vidas': 'url("src/image/fondo-vidas.webp")',
		  'fondo-imagen-vidas': 'url("src/image/fondo-imagen-vidas.webp")',
		  'fondo-imagen-vidas2': 'url("src/image/fondo-imagen-vidas2.webp")',
		  'fondo-profesionales': 'url("src/image/fondo-profesionales.webp")'
		},
	  },
	},
	plugins: [],
  }
  