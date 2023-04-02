module.exports = {
    extends: ['next', 'turbo', 'prettier'],
    rules: {
        '@next/next/no-html-link-for-pages': 'off',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
    },
    parserOptions: {
        babelOptions: {
            presets: [require.resolve('next/babel')],
        },
    },
    plugins: ['simple-import-sort'],
}
