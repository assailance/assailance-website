<script setup lang="ts">
import { useToast } from '@/composables/toast.composable.ts'

const { toasts } = useToast()
</script>

<template>
  <div class="fixed top-4 left-1/2 z-50 w-full max-w-96 -translate-x-1/2 px-4">
    <TransitionGroup name="toast" tag="div" class="flex flex-col items-center space-y-2.5">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        class="text-accent-2/75 bg-toast-bg pointer-events-auto relative inline-flex items-center justify-between rounded-[1.375rem] px-5 py-6 backdrop-blur-xl"
      >
        {{ toast.message }}
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
}

.toast-move {
  transition: all 0.3s ease;
}
</style>
