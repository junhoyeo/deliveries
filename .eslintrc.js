module.exports = {
  extends: 'airbnb',
  plugins: ['react', 'jsx-a11y', 'import'],
  env: {
    'browser': true
  },
  rules: {
    quotes: ['error', 'single'],
    'react/jsx-filename-extension': [1, {
      extensions: ['.js', '.jsx']
    }],
    'react/prop-types': 0,
  }
};
