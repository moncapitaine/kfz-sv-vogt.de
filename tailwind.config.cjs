/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Fira Sans Condensed']
		},
		extend: {
			colors: {
				'btn-neutral' : '#D9',
			}
		}
	},
	plugins: []
};
