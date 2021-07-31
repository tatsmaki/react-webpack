module.exports = {
  env: {
    browser: true,
  },
  extends: ['airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    semi: 0,
    'arrow-body-style': 0,
    'no-param-reassign': ['warn'],
    'prettier/prettier': ['error'],
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
  },
}
