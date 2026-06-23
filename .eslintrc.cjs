module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'playwright'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:playwright/recommended',
  ],
  env: {
    node: true,
    es2021: true,
  },
  rules: {
    // general
    'no-console': 'off',
    'prefer-const': 'error',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

    // typescript
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/consistent-type-imports': 'error',
  },
  overrides: [
    {
      files: ['tests/**/*.ts', 'playwright.config.ts', 'utility/**/*.ts'],
      env: {
        'playwright/test': true,
      },
      rules: {
        // allow some test-code patterns
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
};
