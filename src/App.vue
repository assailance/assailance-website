<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

import Footer from '@/components/layout/Footer.vue'
import Header from '@/components/layout/Header.vue'
import { useTheme } from '@/composables/useTheme.ts'

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
const { applyTheme, initTheme } = useTheme()

const handleSystemTheme = (e: MediaQueryListEvent) => {
  if (!localStorage.theme) {
    applyTheme(e.matches ? 'dark' : 'light')
  }
}

onMounted(() => {
  initTheme()
  prefersDark.addEventListener('change', handleSystemTheme)
})

onUnmounted(() => {
  prefersDark.removeEventListener('change', handleSystemTheme)
})
</script>

<template>
  <div class="z-0 mx-auto flex min-h-screen max-w-3xl flex-col px-4 pt-16 sm:px-8">
    <Header />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
