module.exports = {
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
  ],
  extends: [
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'jsx-a11y', 'import'],
  env: {
    browser: true,
  },
  rules: {
    quotes: ['error', 'single'],
    'react/jsx-filename-extension': [1, {
      extensions: ['.ts', '.tsx'],
    }],
    'react/prop-types': 0,
    'import/extensions': ['off'],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
  },
};
