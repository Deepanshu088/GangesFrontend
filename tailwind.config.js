/** @type {import('tailwindcss').Config} */
module.exports = {
	important: true,
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			boxShadow: {
				base: "0 0 11px rgba(33,33,33,.2)",
			},
			fontFamily: {
				gilda: "'Gilda Display', serif",
				barlow: "'Barlow Condensed', sans-serif",
			},
			colors: {
				bgBookingGrayExtraLight: "#f9f9f9",
				bgBookingGrayLight: "#f5f5f5",
				primaryButtonColor: "#ad9700",
				errorColor: "#ea580c",
				successColor: "#0ea5e9",
			},
			keyframes: {
				bounceInTop: {
					'0%': { transform: 'translate3d(0, -300%, 0)' },
					'58%': { transform: 'translate3d(0, 27px, 0)' },
					'73%': { transform: 'translate3d(0, -12px, 0)' },
					'88%': { transform: 'translate3d(0, 7px, 0)' },
					'100%': { transform: 'translate3d(0, 0, 0)' } // Ensuring end at visible position
				}
			},
			animation: {
				'bounce-in-top': 'bounceInTop 1s ease-out'
			}
		},
	},
	plugins: [],
}

