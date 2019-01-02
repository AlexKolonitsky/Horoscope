module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    'react/prop-types': 0,
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }]
  },
  env: {
    jest: true,
  },
};