<script setup lang="ts">
import XIcon from '@/components/icons/XIcon.vue'
import { onMounted, onUnmounted, ref, watch } from 'vue'

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const app = document.getElementById('app') as HTMLElement
const isVisible = ref<boolean>(false)
const modalState = ref<'open' | 'closed'>('closed')

const close = () => {
  emit('update:modelValue', false)
}

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') close()
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
})

watch(
  () => props.modelValue,
  value => {
    if (value) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      document.body.style.overflow = 'hidden'
      app.style.paddingRight = `${scrollbarWidth}px`
      isVisible.value = true
      modalState.value = 'open'
    } else {
      modalState.value = 'closed'
      setTimeout(() => {
        isVisible.value = false
        app.style.removeProperty('padding-right')
        document.body.style.removeProperty('overflow')
      }, 135)
    }
  }
)
</script>

<template>
  <teleport to="#app">
    <!-- Overlay -->
    <div
      v-if="isVisible"
      :data-state="modalState"
      @click.self="close"
      class="data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out fixed inset-0 z-50 flex items-center justify-center bg-black/50"
    ></div>
    <!-- /Overlay -->
    <!-- Modal -->
    <div
      v-if="isVisible"
      :data-state="modalState"
      class="data-[state=open]:animate-modal-in border-border data-[state=closed]:animate-modal-out bg-global-bg fixed top-1/2 left-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-xl border p-6 shadow-md"
      role="dialog"
      aria-modal="true"
      tabindex="-1"
    >
      <slot></slot>
      <button
        v-press-animate
        title="Close"
        class="text-global-text/85 hover:text-accent absolute top-4 right-4 transition-colors duration-200"
        @click="close"
        aria-label="Close modal"
      >
        <XIcon />
      </button>
    </div>
    <!-- /Modal -->
  </teleport>
</template>
