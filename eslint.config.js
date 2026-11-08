const { defineConfig, globalIgnores } = require('eslint/config');
const reactNativeConfig = require('@react-native/eslint-config/flat');
const simpleImportSort = require('eslint-plugin-simple-import-sort');
module.exports = defineConfig([
  globalIgnores(['android/', 'ios/', 'vendor/', 'coverage/', '.bundle/']),
  ...reactNativeConfig,
  {
    // eslint-plugin-ft-flow@2 (pinned by @react-native/eslint-config) crashes on
    // ESLint 9; this project has no Flow code, so its rules are unnecessary.
    files: ['**/*.js'],
    rules: {
      'ft-flow/define-flow-type': 'off',
      'ft-flow/use-flow-type': 'off',
    },
  },
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'react-native/no-unused-styles': 'error',
      'react-native/split-platform-components': 'error',
      'react-native/no-color-literals': 'warn',
      'react-native/no-single-element-style-arrays': 'error',
      'no-console': 'warn',
      'no-debugger': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      'no-duplicate-imports': ['error', { allowSeparateTypeImports: true }],
      'max-lines': ['warn', { max: 300, skipBlankLines: true }],
    },
  },
]);
