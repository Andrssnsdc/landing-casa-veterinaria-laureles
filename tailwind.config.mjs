/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		animation: {
			spin: 'spin 4s linear infinite',
		  },

		backgroundImage: {
		  'hero-image': 'url("../fondo-banner-inicio.webp")',
		  'hero-image-mobile': 'url("../fondo-banner-mobile.webp")',
		  'fondo-servicios-mobile': 'url("../fondo-servicios.webp")',
		  'fondo-vidas': 'url("../fondo-vidas.webp")',
		  'fondo-imagen-vidas': 'url("../fondo-imagen-vidas.webp")',
		  'fondo-imagen-vidas2': 'url("../fondo-imagen-vidas2.webp")',
		  'fondo-profesionales': 'url("../fondo-profesionales.webp")'
		},
	  },
	},
	plugins: [ require('tailwindcss-animated')
			],
  }
  