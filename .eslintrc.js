module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  plugins: ['react', 'prettier', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    semi: 'off',
    '@typescript-eslint/ban-types': 1,
    '@typescript-eslint/ban-ts-comment': 1,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'react/no-string-refs': 'off',
    'no-empty': 'off',
    'no-prototype-builtins': 'off',
    'no-case-declarations': 'off',
    '@typescript-eslint/no-var-requires': 0,
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'no-empty-pattern': 'off',
    '@typescript-eslint/no-unused-vars': [2, { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
  },
  settings: {
    react: {
      version: 'latest',
    },
  },
};
