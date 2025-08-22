<script setup lang="ts">
import ImagesIcon from '@/components/icons/ImagesIcon.vue'
import { GalleryModal } from '@/components/ui/modal'
import { shallowRef } from 'vue'
import CardContent from './CardContent.vue'
import type { ICardWithImageProps } from './types.ts'

defineProps<ICardWithImageProps>()

const galleryOpen = shallowRef<boolean>(false)
</script>

<template>
  <article class="overflow-hidden rounded-lg shadow-md">
    <div class="relative h-40">
      <!-- First Image -->
      <img :src="images[0]" class="absolute h-full w-full object-cover" :alt="title" />
      <!-- /First Image -->
      <!-- Show Images -->
      <button
        v-press-animate
        class="bg-global-bg hover:text-accent-2 absolute top-2.5 left-2.5 flex size-8 cursor-default items-center overflow-hidden rounded-lg opacity-85 transition-all duration-200 hover:w-[86px]"
        @click="galleryOpen = true"
      >
        <span class="flex min-w-8 items-center justify-center">
          <ImagesIcon />
        </span>
        <span class="mt-0.5 -ml-px text-[13px]">Images</span>
        <span class="sr-only">Show {{ title }} Images</span>
      </button>
      <!-- /Show Images -->
    </div>
    <!-- Card Content -->
    <CardContent v-bind="{ title, titleLink, description, externalLink, tags }" />
    <!-- /Card Content -->
    <!-- Gallery -->
    <GalleryModal v-model="galleryOpen" :images="images" />
    <!-- /Gallery -->
  </article>
</template>
