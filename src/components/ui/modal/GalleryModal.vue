<script setup lang="ts">
import ChevronLeftIcon from '@/components/icons/ChevronLeftIcon.vue'
import ChevronRightIcon from '@/components/icons/ChevronRightIcon.vue'
import XIcon from '@/components/icons/XIcon.vue'
import { computed, onUnmounted, ref, useTemplateRef, watch } from 'vue'
import BaseModal from './BaseModal.vue'

const model = defineModel<boolean>({ required: true })

const props = defineProps<{
  images: string[]
}>()

const baseModalRef = useTemplateRef<InstanceType<typeof BaseModal>>('baseModal')
const prevButtonRef = useTemplateRef<HTMLButtonElement>('prevButton')
const nextButtonRef = useTemplateRef<HTMLButtonElement>('nextButton')
const currentIndex = ref<number>(0)
const currentEffect = ref<'slide-left' | 'slide-right' | null>(null)

const hasSomeImages = computed(() => props.images.length > 1)
const currentImage = computed(() => props.images[currentIndex.value])
const currentAlt = computed(() => `Image ${currentIndex.value + 1} of ${props.images.length}`)

const nextImage = () => {
  currentEffect.value = 'slide-left'
  if (currentIndex.value < props.images.length - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}

const prevImage = () => {
  currentEffect.value = 'slide-right'
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = props.images.length - 1
  }
}

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'ArrowLeft') {
    e.preventDefault()
    e.stopPropagation()
    prevImage()
    if (document.activeElement !== prevButtonRef.value) {
      prevButtonRef.value?.focus()
    }
  } else if (e.key === 'ArrowRight') {
    e.preventDefault()
    e.stopPropagation()
    nextImage()
    if (document.activeElement !== nextButtonRef.value) {
      nextButtonRef.value?.focus()
    }
  }
}

watch(model, value => {
  if (!hasSomeImages.value) return

  if (value) {
    document.addEventListener('keydown', handleKeyDown, true)
  } else {
    document.removeEventListener('keydown', handleKeyDown, true)
  }
})

onUnmounted(() => {
  if (hasSomeImages.value) {
    document.removeEventListener('keydown', handleKeyDown, true)
  }
})
</script>

<template>
  <BaseModal ref="baseModal" v-model="model">
    <!-- Image -->
    <Transition :name="currentEffect as string">
      <img
        :key="currentIndex"
        :src="currentImage"
        :alt="currentAlt"
        class="absolute top-1/2 left-1/2 max-h-[80vh] max-w-full -translate-1/2"
        draggable="false"
        :aria-description="currentAlt"
      />
    </Transition>
    <!-- /Image -->

    <!-- Prev Button -->
    <button
      v-if="hasSomeImages"
      ref="prevButton"
      class="bg-overlay-element hover:bg-overlay-element-hover absolute top-1/2 left-4 flex h-28 w-14 -translate-y-1/2 items-center justify-center rounded-xl text-gray-300/75 transition-all duration-150 hover:text-gray-300"
      aria-label="Previous image"
      @click="prevImage"
    >
      <ChevronLeftIcon class="mr-0.5" />
    </button>
    <!-- /Prev Button -->

    <!-- Next Button -->
    <button
      v-if="hasSomeImages"
      ref="nextButton"
      class="bg-overlay-element hover:bg-overlay-element-hover absolute top-1/2 right-4 flex h-28 w-14 -translate-y-1/2 items-center justify-center rounded-xl text-gray-300/75 transition-all duration-150 hover:text-gray-300"
      aria-label="Next image"
      @click="nextImage"
    >
      <ChevronRightIcon class="ml-0.5" />
    </button>
    <!-- /Next Button -->

    <!-- Close -->
    <button
      class="bg-overlay-element hover:bg-overlay-element-hover absolute top-4 right-4 flex size-14 items-center justify-center rounded-lg text-gray-300/75 transition-colors duration-200 hover:text-gray-300"
      aria-label="Close gallery"
      @click="baseModalRef?.close()"
    >
      <XIcon class="size-6" />
    </button>
    <!-- /Close -->

    <!-- Number of Image -->
    <div aria-live="polite" aria-atomic="true" class="absolute top-5 left-4 z-50 rounded-lg px-3.5 py-2.5 text-gray-300">
      {{ currentIndex + 1 }} of {{ images.length }}
    </div>
    <!-- /Number of Image -->
  </BaseModal>
</template>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-property: transform, opacity;
  transition-duration: 0.15s;
  transition-timing-function: ease-in-out;
}

.slide-left-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.slide-left-leave-to,
.slide-right-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
