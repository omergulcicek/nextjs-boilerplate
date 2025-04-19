/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: [
		"variant",
		["@media (prefers-color-scheme: dark) { &:not(.light *) }", "&:is(.dark *)"]
	]
}
