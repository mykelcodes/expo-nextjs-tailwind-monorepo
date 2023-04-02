const configTailwind = require('ui/tailwind.config')

module.exports = {
    ...configTailwind,
    content: ['./src/**/*.{js,jsx,ts,tsx}', '../../packages/**/*.{js,jsx,ts,tsx}'],
    plugins: [],
}
