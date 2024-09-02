module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    quotes: ['error', 'single'],
    'prettier/prettier': ['error', { singleQuote: true }],
  },
};
