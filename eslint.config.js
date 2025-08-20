import js from '@eslint/js'
import prettier from 'eslint-plugin-prettier/recommended'
import vue from 'eslint-plugin-vue'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import ts from 'typescript-eslint'

export default defineConfig([
  { ignores: ['dist', 'coverage'] },

  // =============================
  // ===== Js/Ts Recommended =====
  // =============================
  js.configs.recommended,
  ts.configs.recommended,

  // ===========================
  // ===== Browser Globals =====
  // ===========================
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    languageOptions: { globals: globals.browser }
  },

  // =============================
  // ===== ESLint Plugin Vue =====
  // =============================
  ...vue.configs['flat/recommended'],
  {
    files: ['**/*.{vue,ts}'],
    languageOptions: {
      parserOptions: { parser: ts.parser }
    },
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  },

  // ====================
  // ===== Prettier =====
  // ====================
  prettier
])
