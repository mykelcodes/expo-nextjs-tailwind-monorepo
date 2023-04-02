const configTailwind = require('ui/tailwind.config')

/** @type {import('tailwindcss').Config} */

module.exports = {
    ...configTailwind,
    content: ['./src/**/*.{js,ts,jsx,tsx}', '../../packages/**/*.{js,ts,jsx,tsx}'],
    important: 'html',
    plugins: [require('nativewind/tailwind/css')],
}
