<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

import Footer from '@/components/layout/Footer.vue'
import Header from '@/components/layout/Header.vue'
import ToastContainer from '@/components/layout/ToastContainer.vue'
import { modalStack } from '@/composables/useModalManager.ts'
import { useTheme } from '@/composables/useTheme.ts'
import { provideToast } from '@/composables/useToast.ts'

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
const { applyTheme, initTheme } = useTheme()

const handleSystemTheme = (e: MediaQueryListEvent) => {
  if (!localStorage.theme) {
    applyTheme(e.matches ? 'dark' : 'light')
  }
}

const handleKeyDown = (e: KeyboardEvent) => {
  if (modalStack.value.length === 0) return
  const currentModal = modalStack.value[modalStack.value.length - 1]
  currentModal.handleKeyDown(e)
}

onMounted(() => {
  initTheme()
  prefersDark.addEventListener('change', handleSystemTheme)
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  prefersDark.removeEventListener('change', handleSystemTheme)
  window.removeEventListener('keydown', handleKeyDown)
})

provideToast()
</script>

<template>
  <div class="z-0 mx-auto flex min-h-screen max-w-3xl flex-col px-4 pt-16 sm:px-8">
    <Header />
    <main>
      <RouterView />
    </main>
    <Footer />
    <ToastContainer />
  </div>
</template>
