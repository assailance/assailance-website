import { inject, provide, ref, type Ref } from 'vue'

const TOAST_KEY = Symbol('toast')
const TOAST_DURATION_DEFAULT = 3000

interface Toast {
  id: number
  message: string
}

const toasts = ref<Toast[]>([])

export function provideToast() {
  provide(TOAST_KEY, {
    toasts,
    add(message: string, duration?: number) {
      if (toasts.value.length >= 3) {
        toasts.value.shift()
      }
      toasts.value.push({
        id: toasts.value.length + 1,
        message
      })
      setTimeout(() => {
        toasts.value.shift()
      }, duration ?? TOAST_DURATION_DEFAULT)
    }
  })
}

export function useToast() {
  const toast = inject<{
    toasts: Ref<Toast[]>
    add: (message: string, duration?: number) => void
  }>(TOAST_KEY)
  if (!toast) throw new Error('toast is not provided')
  return toast
}
