/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			orange: '#ef95de',
			purple: '#44195e',
			lightViolot: '#fd31ee',
			lightPurple: '#a37cf0',
			black: '#010101',
		},
		letterSpacing: {
			tight: '-.015em',
		},
		extend: {
			height: {
				'half-screen': '50vh',
			},
		},
	},
	plugins: [],
};
