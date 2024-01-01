module.exports = {
  env: {
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['.eslintrc.js'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  root: true,
  plugins: ['@typescript-eslint/eslint-plugin'],
  rules: {
    indent: [
      'error',
      2,
      { ignoredNodes: ['TemplateLiteral > *'], SwitchCase: 1 },
    ],
    'linebreak-style': ['error', 'unix'],
    'no-cond-assign': ['error', 'always'],
    'no-console': 'off',
    'no-empty': 'warn',
    quotes: ['error', 'single'],
  },
};
