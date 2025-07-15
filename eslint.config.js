import eslintJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import eslintTs from 'typescript-eslint'

export default defineConfig([
  { ignores: ['dist', 'coverage'] },

  // =======================
  // ===== Basic Rules =====
  // =======================
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    plugins: { eslintJs },
    extends: ['eslintJs/recommended']
  },

  // ===========================
  // ===== Browser Globals =====
  // ===========================
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    languageOptions: { globals: globals.browser }
  },

  // ==================================
  // ===== TypeScript Recommended =====
  // ==================================
  eslintTs.configs.recommended,

  // =============================
  // ===== ESLint Plugin Vue =====
  // =============================
  ...pluginVue.configs['flat/essential'].map(config => ({
    ...config,
    files: ['**/*.vue'],
    rules: {
      ...config.rules,
      'vue/multi-word-component-names': 'off'
    }
  })),

  // =====================================
  // ===== TypeScript Parser for Vue =====
  // =====================================
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: { parser: eslintTs.parser }
    }
  }
])
