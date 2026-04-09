/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		letterSpacing: {
			tight: '-.015em',
		},
		extend: {
			colors: {
				app: '#090B10',
				surface: '#10141f',
				surfaceSoft: '#161c2b',
				ink: '#e8ecf8',
				muted: '#9ba7c2',
				accent: '#8ba9ff',
				accentSoft: '#b4c6ff',
				borderSoft: 'rgba(255, 255, 255, 0.08)',
				glow: 'rgba(139, 169, 255, 0.26)',
			},
			height: {
				'half-screen': '50vh',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				pulseGlow: {
					'0%, 100%': { opacity: 0.2, transform: 'scale(0.98)' },
					'50%': { opacity: 0.45, transform: 'scale(1.02)' },
				},
				fadeUp: {
					'0%': { opacity: 0, transform: 'translateY(12px)' },
					'100%': { opacity: 1, transform: 'translateY(0px)' },
				},
			},
			animation: {
				'float-slow': 'float 6s ease-in-out infinite',
				'glow-pulse': 'pulseGlow 8s ease-in-out infinite',
				'fade-up': 'fadeUp 0.8s ease-out both',
			},
		},
	},
	plugins: [],
};
