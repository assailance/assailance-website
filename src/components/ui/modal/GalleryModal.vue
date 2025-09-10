<script setup lang="ts">
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from '@/components/icons'
import { computed, onUnmounted, ref, useTemplateRef, watch } from 'vue'
import BaseModal from './BaseModal.vue'

const model = defineModel<boolean>({ required: true })

const props = defineProps<{
  images: string[]
}>()

const baseModalRef = useTemplateRef<InstanceType<typeof BaseModal>>('baseModal')
const imageRef = useTemplateRef<HTMLImageElement>('image')
const prevButtonRef = useTemplateRef<HTMLButtonElement>('prevButton')
const nextButtonRef = useTemplateRef<HTMLButtonElement>('nextButton')
const currentIndex = ref<number>(0)
const currentEffect = ref<'slide-left' | 'slide-right' | null>(null)

const scale = ref<number>(1)
const offsetX = ref<number>(0)
const offsetY = ref<number>(0)

const hasSomeImages = computed(() => props.images.length > 1)
const currentImage = computed(() => props.images[currentIndex.value])
const currentAlt = computed(() => `Image ${currentIndex.value + 1} of ${props.images.length}`)

const nextImage = () => {
  imageRef.value?.removeAttribute('style')
  currentEffect.value = 'slide-left'
  if (currentIndex.value < props.images.length - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}

const prevImage = () => {
  imageRef.value?.removeAttribute('style')
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

const handleWheel = (e: WheelEvent) => {
  if (!imageRef.value) return

  e.preventDefault()

  const delta = -e.deltaY * 0.001
  const newScale = Math.max(0.1, Math.min(5, scale.value + delta))

  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
  const mouseX = e.clientX - rect.left
  const mouseY = e.clientY - rect.top
  const originX = (mouseX - offsetX.value - rect.width / 2) / scale.value
  const originY = (mouseY - offsetY.value - rect.height / 2) / scale.value

  scale.value = newScale

  if (scale.value <= 1) {
    offsetX.value = 0
    offsetY.value = 0
  } else {
    offsetX.value = mouseX - rect.width / 2 - originX * scale.value
    offsetY.value = mouseY - rect.height / 2 - originY * scale.value

    const imgWidth = imageRef.value.naturalWidth * scale.value
    const imgHeight = imageRef.value.naturalHeight * scale.value
    const minX = -(imgWidth - rect.width) / 2
    const maxX = (imgWidth - rect.width) / 2
    const minY = -(imgHeight - rect.height) / 2
    const maxY = (imgHeight - rect.height) / 2

    offsetX.value = Math.min(Math.max(offsetX.value, minX), maxX)
    offsetY.value = Math.min(Math.max(offsetY.value, minY), maxY)
  }

  imageRef.value?.setAttribute('style', `transform: translate(${offsetX.value}px, ${offsetY.value}px) scale(${scale.value})`)
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
  document.removeEventListener('keydown', handleKeyDown, true)
})
</script>

<template>
  <BaseModal ref="baseModal" v-model="model">
    <!-- Image -->
    <Transition :name="currentEffect || ''">
      <img
        ref="image"
        :key="currentIndex"
        :src="currentImage"
        :alt="currentAlt"
        class="absolute top-1/2 left-1/2 max-h-[90vh] max-w-full -translate-1/2 transition-transform duration-200"
        draggable="false"
        loading="lazy"
        @wheel="handleWheel"
      />
    </Transition>
    <!-- /Image -->

    <!-- Prev Button -->
    <button
      v-if="hasSomeImages"
      ref="prevButton"
      type="button"
      class="bg-overlay-element hover:bg-overlay-element-hover xs:left-4 xs:h-18 xs:w-12 xs:rounded-xl absolute top-1/2 left-2.5 flex h-14 w-10 -translate-y-1/2 items-center justify-center rounded-lg text-gray-300/75 transition-all duration-150 hover:text-gray-300 sm:h-20 md:h-28 md:w-14"
      aria-label="Previous image"
      @click="prevImage"
    >
      <ChevronLeftIcon class="xs:size-6 ml-0.5 size-5 md:size-8" />
    </button>
    <!-- /Prev Button -->

    <!-- Next Button -->
    <button
      v-if="hasSomeImages"
      ref="nextButton"
      type="button"
      class="bg-overlay-element hover:bg-overlay-element-hover xs:right-4 xs:h-18 xs:w-12 xs:rounded-xl absolute top-1/2 right-2.5 flex h-14 w-10 -translate-y-1/2 items-center justify-center rounded-lg text-gray-300/75 transition-all duration-150 hover:text-gray-300 sm:h-20 md:h-28 md:w-14"
      aria-label="Next image"
      @click="nextImage"
    >
      <ChevronRightIcon class="xs:size-6 ml-0.5 size-5 md:size-8" />
    </button>
    <!-- /Next Button -->

    <!-- Close -->
    <button
      class="bg-overlay-element hover:bg-overlay-element-hover absolute top-4 right-4 flex size-12 items-center justify-center rounded-lg text-gray-300/75 transition-colors duration-200 hover:text-gray-300 md:size-14"
      aria-label="Close gallery"
      type="button"
      @click="baseModalRef?.close()"
    >
      <XIcon class="size-5 md:size-6" />
    </button>
    <!-- /Close -->

    <!-- Number of Image -->
    <div aria-live="polite" aria-atomic="true" class="absolute top-9 left-6 z-50 rounded-lg text-gray-300">{{ currentIndex + 1 }} of {{ images.length }}</div>
    <!-- /Number of Image -->
  </BaseModal>
</template>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition:
    transform 0.15s ease-in-out,
    opacity 0.15s ease-in-out;
}

.slide-left-enter-from,
.slide-right-leave-to {
  transform: translateX(50%);
  opacity: 0;
}

.slide-left-leave-to,
.slide-right-enter-from {
  transform: translateX(-50%);
  opacity: 0;
}
</style>
