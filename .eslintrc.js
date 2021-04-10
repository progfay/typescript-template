module.exports = {
  env: {
    'jest/globals': true,
    browser: true,
    es6: true
  },
  extends: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.eslint.json'
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline']
  },
  plugins: ['@typescript-eslint', 'jest']
}
