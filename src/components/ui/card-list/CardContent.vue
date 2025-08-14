<script setup lang="ts">
import LinkIcon from '@/components/icons/LinkIcon.vue'
import type { ICardProps } from './types.ts'

defineProps<ICardProps>()
</script>

<template>
  <div class="text-accent bg-secondary-bg p-4">
    <!-- Title -->
    <header class="flex items-center justify-between gap-2.5">
      <h3 class="font-semibold">
        <a class="underline underline-offset-2" :href="titleLink" rel="noreferrer" target="_blank">{{ title }}</a>
      </h3>
      <a
        v-if="externalLink"
        title="Go to the project"
        :href="externalLink"
        rel="noreferrer"
        target="_blank"
        class="text-accent-2 hover:text-accent transition-all duration-300 hover:scale-110"
      >
        <LinkIcon />
      </a>
    </header>
    <!-- /Title -->
    <!-- Tags -->
    <ul v-if="tags" class="mt-2.5 flex flex-wrap gap-1.5 text-[10px] tracking-wider">
      <li v-for="tag in tags" :key="tag" class="bg-accent-2/10 inline-flex items-center rounded-sm px-2 pt-1 pb-0.5 shadow-xs">
        {{ tag }}
      </li>
    </ul>
    <!-- /Tags -->
    <!-- Description -->
    <p :class="[tags ? 'mt-2.5' : 'mt-2', 'text-accent-2/75']">
      {{ description }}
    </p>
    <!-- /Description -->
  </div>
</template>
