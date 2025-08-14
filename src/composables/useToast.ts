import { inject, provide, ref, type Ref } from 'vue'

const TOAST_KEY = Symbol('toast')
const TOAST_DURATION_DEFAULT = 3000

interface Toast {
  id: string
  message: string
}

const toasts = ref<Toast[]>([])

export function provideToast() {
  provide(TOAST_KEY, {
    toasts,
    add(message: string, duration?: number) {
      const id = Date.now() + Math.random().toString(36).substring(2, 9)
      if (toasts.value.length >= 3) {
        toasts.value.shift()
      }
      toasts.value.push({ id, message })
      setTimeout(() => {
        toasts.value = toasts.value.filter(toast => toast.id !== id)
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
