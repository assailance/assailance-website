<script setup lang="ts">
import { nextTick, ref, useTemplateRef, watch } from 'vue'

const model = defineModel<boolean>({ required: true })

const app = document.getElementById('app') as HTMLElement
const focusableSelectors = [
  'button:not([disabled])',
  '[href]',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"]):not([disabled])'
].join(', ')

const isVisible = ref<boolean>(false)
const modalState = ref<'open' | 'closed'>('closed')
const modalRef = useTemplateRef<HTMLDivElement>('modal')
const focusableElements = ref<HTMLElement[]>([])
const firstFocusableElement = ref<HTMLElement | null>(null)
const lastFocusableElement = ref<HTMLElement | null>(null)
const previouslyFocusedElement = ref<HTMLElement | null>(null)

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
  focusableElements.value = Array.from(modalRef.value.querySelectorAll(focusableSelectors)) as HTMLElement[]
  if (focusableElements.value.length) {
    firstFocusableElement.value = focusableElements.value[0]
    lastFocusableElement.value = focusableElements.value[focusableElements.value.length - 1]
    firstFocusableElement.value?.focus()
  }
}

const showModal = () => {
  previouslyFocusedElement.value = document.activeElement as HTMLElement
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
  document.body.style.overflow = 'hidden'
  document.body.style.pointerEvents = 'none'
  app.style.paddingRight = `${scrollbarWidth}px`
  isVisible.value = true
  modalState.value = 'open'
  nextTick(() => updateFocusableElements())
}

const hideModal = () => {
  modalState.value = 'closed'
  setTimeout(() => {
    isVisible.value = false
    app.style.removeProperty('padding-right')
    document.body.style.removeProperty('overflow')
    document.body.style.removeProperty('pointer-events')
    previouslyFocusedElement.value?.focus()
  }, 135)
}

watch(model, value => {
  if (value) {
    showModal()
  } else {
    hideModal()
  }
})

defineExpose({
  close
})
</script>

<template>
  <teleport to="#app">
    <!-- Overlay -->
    <div
      v-if="isVisible"
      :data-state="modalState"
      aria-hidden="true"
      class="data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out pointer-events-none fixed inset-0 z-[9998] bg-black/75"
    ></div>
    <!-- /Overlay -->
    <!-- Modal -->
    <div
      v-if="isVisible"
      ref="modal"
      role="dialog"
      aria-modal="true"
      tabindex="-1"
      :aria-hidden="!isVisible"
      :data-state="modalState"
      class="data-[state=open]:animate-modal-in data-[state=closed]:animate-modal-out pointer-events-auto fixed inset-0 top-0 left-0 z-[9999] h-full w-full"
      @keydown="handleKeyDown"
      @click.self="close"
    >
      <slot />
    </div>
    <!-- /Modal -->
  </teleport>
</template>
