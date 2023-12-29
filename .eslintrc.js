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
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        'newlines-between': 'always',
      },
    ],
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
