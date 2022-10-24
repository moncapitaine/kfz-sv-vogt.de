/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Fira Sans Condensed']
		},
		backgroundImage: {
			car1: 'url(/background.png)'
		},
		extend: {
			colors: {
				'btn-neutral' : '#D9',
			}
		}
	},
	plugins: []
};
