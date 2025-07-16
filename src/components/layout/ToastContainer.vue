<script setup lang="ts">
import { useToast } from '@/composables/useToast.ts'

const { toasts } = useToast()
</script>

<template>
  <div class="fixed bottom-4 left-1/2 z-50 w-80 -translate-x-1/2">
    <TransitionGroup name="toast" tag="div" class="space-y-2.5">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        class="text-accent-2/75 bg-toast-bg pointer-events-auto relative flex w-[220px] items-center justify-between rounded-[1.375rem] px-5 py-6 backdrop-blur-xl"
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

.toast-leave-active {
  position: absolute;
}

.toast-move {
  transition: all 0.3s ease;
}
</style>
