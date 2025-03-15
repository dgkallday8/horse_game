import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      sourceType: 'module',
      ecmaVersion: 'latest',
      globals: {
        document: 'readonly',
        window: 'readonly',
        HTMLElement: 'readonly',
        HTMLButtonElement: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': ts,
      prettier: prettierPlugin,
      import: importPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...ts.configs.recommended.rules,
      'prettier/prettier': 'error',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'import/no-duplicates': 'error',
      'import/newline-after-import': 'error',
    },
  },
  prettier,
];
