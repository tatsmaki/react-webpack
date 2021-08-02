module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  overrides: [
    {
      files: ['**/*.css', '**/*.html'],
      options: {
        singleQuote: false,
      },
    },
  ],
}
