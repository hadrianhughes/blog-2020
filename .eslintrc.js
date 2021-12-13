module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'import'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    'semi': [2, 'never']
  }
}
