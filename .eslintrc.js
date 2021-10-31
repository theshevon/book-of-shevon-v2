module.exports = {
  env: {
    browser: true, // Browser global variables like `window` etc.
    commonjs: true, // CommonJS global variables and CommonJS scoping.Allows require, exports and module.
    es6: true, // Enable all ECMAScript 6 features except for modules.
    jest: true, // Jest global variables like `it` etc.
    node: true, // Defines things like process.env when generating through node
  },
  globals: {
    JSX: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    // "plugin:jsx-a11y/recommended",
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
  ],
  parser: 'babel-eslint', // Uses babel-eslint transforms.
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  plugins: [
    'import', // eslint-plugin-import plugin. https://www.npmjs.com/package/eslint-plugin-import
  ],
  root: true, // For configuration cascading.
  rules: {
    'comma-dangle': [
      'warn',
      'always-multiline',
    ],
    'eol-last': 'warn',
    'import/order': [
      'warn',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
      },
    ],
    'import/no-duplicates': 'warn',
    'no-undef': 'warn',
    'no-multiple-empty-lines': [
      'warn',
      {
        'max': 1,
        'maxEOF': 1,
      },
    ],
    'no-trailing-spaces': 'warn',
    'indent': [
      'warn',
      2,
      {
        ignoredNodes: ['JSXAttribute'],
        SwitchCase: 1,
      },
    ],
    'jsx-quotes': [
      'warn',
      'prefer-single',
    ],
    'no-console': 'warn',
    'no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '_', // vars named '_' will be treated as intentionally unused
        argsIgnorePattern: '_', // args named '_' will be treated as intentionally unused
      },
    ],
    'object-curly-spacing': [
      'warn',
      'always',
    ],
    'quotes': [
      'warn',
      'single',
    ],
    'key-spacing': [
      'warn',
      {
        'beforeColon': false,
        'afterColon': true,
      },
    ],
    'react/jsx-curly-spacing': [
      'warn',
      {
        'when': 'never',
        'children': {
          'when': 'always',
        },
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
      },
    ],
    'react/jsx-indent': [
      'warn',
      2,
    ],
    'react/jsx-indent-props': [
      'warn',
      4,
    ],
    'react/jsx-key': 'warn',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'semi': [
      'warn',
      'always',
    ],
    'sort-imports': [
      'warn',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],
  },
  settings: {
    react: {
      version: 'detect', // Detect react version
    },
  },
  overrides: [
    {
      files: [ '**/*.ts?(x)' ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      plugins: [
        '@typescript-eslint',
      ],
    },
  ],
};
