/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.vue"],
	theme: {
		extend: {
			fontFamily: {
				heading: ["Sanchez", "serif"],
				special: ["Fira Sans Extra Condensed", "sans-serif"],
				body: ["Alegreya Sans", "sans-serif"],
			},
			colors: {
				main: {
					50: "#ecf4f0",
					100: "#d9e9e2",
					200: "#b3d3c5",
					300: "#8ebea7",
					400: "#68a88a",
					500: "#42926d",
					600: "#357557",
					700: "#285841",
					800: "#1a3a2c",
					900: "#0d1d16",
				},
			},
		},
	},
	plugins: [],
};
