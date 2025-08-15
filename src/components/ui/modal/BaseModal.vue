<script setup lang="ts">
import { useModalManager } from '@/composables/useModalManager.ts'
import { nextTick, onUnmounted, ref, useTemplateRef, watch } from 'vue'

const model = defineModel<boolean>({ required: true })

const { registerModal, unregisterModal } = useModalManager()

const app = document.getElementById('app') as HTMLElement

const isVisible = ref<boolean>(false)
const modalState = ref<'open' | 'closed'>('closed')
const modalRef = useTemplateRef<HTMLDivElement>('modal')
const focusableElements = ref<HTMLElement[]>([])
const firstFocusableElement = ref<HTMLElement | null>(null)
const lastFocusableElement = ref<HTMLElement | null>(null)

const close = () => {
  model.value = false
}

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    close()
    return
  }
  if (e.key !== 'Tab' || !focusableElements.value.length) return

  if (e.shiftKey) {
    if (document.activeElement === firstFocusableElement.value) {
      e.preventDefault()
      lastFocusableElement.value?.focus()
    }
    return
  }
  if (document.activeElement === lastFocusableElement.value) {
    e.preventDefault()
    firstFocusableElement.value?.focus()
  }
}

const updateFocusableElements = () => {
  if (!isVisible.value || !modalRef.value) return
  const focusableElementsSelector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  focusableElements.value = Array.from(modalRef.value.querySelectorAll(focusableElementsSelector)) as HTMLElement[]
  if (focusableElements.value.length) {
    firstFocusableElement.value = focusableElements.value[0]
    lastFocusableElement.value = focusableElements.value[focusableElements.value.length - 1]
    firstFocusableElement.value?.focus()
  }
}

const showModal = () => {
  if (!document.querySelector('[data-modal-container]')) {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    app.style.paddingRight = `${scrollbarWidth}px`
  }
  registerModal(handleKeyDown)
  isVisible.value = true
  modalState.value = 'open'
  nextTick(() => updateFocusableElements())
}

const hideModal = () => {
  unregisterModal()
  modalState.value = 'closed'
  setTimeout(() => {
    isVisible.value = false
    nextTick(() => {
      if (!document.querySelector('[data-modal-container]')) {
        app.style.removeProperty('padding-right')
        document.body.style.removeProperty('overflow')
      }
    })
  }, 135)
}

watch(model, value => {
  if (value) {
    showModal()
  } else {
    hideModal()
  }
})

onUnmounted(() => {
  unregisterModal()
})

defineExpose({
  isVisible,
  modalState,
  close
})
</script>

<template>
  <teleport to="#app">
    <!-- Overlay -->
    <div
      v-if="isVisible"
      :data-state="modalState"
      class="data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out pointer-events-none fixed inset-0 z-[9997] bg-black/75"
    ></div>
    <!-- /Overlay -->
    <!-- Modal -->
    <div v-if="isVisible" ref="modal" data-modal-container class="pointer-events-auto fixed top-0 left-0 z-[9998] h-full w-full" @click.self="close">
      <slot />
    </div>
    <!-- /Modal -->
  </teleport>
</template>
