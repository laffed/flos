import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import jest from 'eslint-plugin-jest';
import comments from 'eslint-plugin-eslint-comments';


export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
      },
      ecmaVersion: 'latest',
      globals: {
        node: true,
        es6: true,
      },
    },
    plugins: {
      '@typescript-eslint': ts,
      react,
      'react-hooks': reactHooks,
      import: importPlugin,
      jest,
      'eslint-comments': comments,
    },
    settings: {
      react: {
        pragma: 'React',
        version: 'detect',
      },
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/ignore': ['node_modules', 'react-native'],
      'import/resolver': {
        node: {
          moduleDirectory: ['node_modules', 'src/'],
        },
        typescript: {},
      },
    },
    rules: {
      eqeqeq: 'error',
      'eslint-comments/no-unused-disable': 'error',
      'eslint-comments/require-description': 'error',
      'newline-before-return': 'error',
      'eol-last': ['error', 'always'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'object-property-newline': 'error',
      'object-curly-newline': ['error', {
        ObjectExpression: {
          minProperties: 1,
          multiline: true,
          consistent: true,
        },
        ObjectPattern: {
          multiline: true,
          consistent: true,
        },
        ImportDeclaration: {
          multiline: true,
          consistent: true,
          minProperties: 3,
        },
        ExportDeclaration: {
          multiline: true,
          consistent: true,
          minProperties: 3,
        },
      }],
      'space-in-parens': ['error', 'never'],
      'max-len': ['error', {
        code: 120,
        tabWidth: 2,
        ignoreStrings: true,
        ignoreTrailingComments: true,
        ignoreTemplateLiterals: true,
      }],
      'no-trailing-spaces': 'error',
      'no-multi-spaces': 'error',
      'no-console': 'error',
      'multiline-comment-style': 'off',
      'comma-spacing': ['error', {
        before: false,
        after: true,
      }],
      'comma-dangle': ['error', {
        objects: 'always-multiline',
      }],
      semi: ['error', 'always'],
      indent: ['error', 2, {
        SwitchCase: 1,
      }],
      quotes: ['error', 'single'],
      'keyword-spacing': ['error', {
        before: true,
      }],
      'space-before-blocks': ['error', {
        functions: 'always',
        keywords: 'always',
        classes: 'always',
      }],
      'import/order': ['error', {
        groups: ['builtin', 'external', 'internal', 'unknown', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      }],
      'import/no-unresolved': 'error',
      'import/newline-after-import': ['error', {
        count: 2,
      }],
      'import/namespace': ['error', {
        allowComputed: true,
      }],
      'react/react-in-jsx-scope': 'off',
      'react/self-closing-comp': ['error', {
        component: true,
        html: true,
      }],
      'react/jsx-indent': ['error', 2, {
        indentLogicalExpressions: true,
      }],
      'react/jsx-indent-props': ['error', 2],
      'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
      'react/display-name': 'off',
      'react/jsx-tag-spacing': ['error', {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      }],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      '@typescript-eslint/ban-ts-comment': ['error', {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': true,
        'ts-nocheck': true,
        'ts-check': 'allow-with-description',
        minimumDescriptionLength: 10,
      }],
      '@typescript-eslint/no-unused-vars': ['warn', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      }],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/no-explicit-any': ['error', {
        fixToUnknown: false,
        ignoreRestArgs: true,
      }],
      '@typescript-eslint/strict-boolean-expressions': ['error', {
        allowString: false,
        allowNumber: false,
        allowNullableObject: true,
      }],
      'no-restricted-imports': ['error', {
        paths: [
          {
            name: 'react',
            importNames: ['default'],
            message: 'No default React import.',
          },
          {
            name: 'lodash',
            message: 'Please import [module] from lodash/[module]',
          }
        ],
      }],
    },
  },
  {
    files: ['**/*.test.ts', '**/*.test.tsx'],
    plugins: {
      jest,
    },
    extends: ['plugin:jest/all'],
  }
];
