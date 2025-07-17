// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import prettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';

export default withNuxt([
  {
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'warn',
      quotes: ['error', 'single'],
      'no-console': 1,
      'vue/no-multiple-template-root': 'off',
    },
    languageOptions: {
      globals: {
        defineNuxtConfig: 'readonly',
      },
    },
  },
  configPrettier, // отключение конфликтующих с Prettier правил
]);
