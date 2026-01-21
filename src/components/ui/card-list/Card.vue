<script setup lang="ts">
import CardContent from "./CardContent.vue"
import type { ICardProps } from "./types.ts"

defineProps<ICardProps>()
</script>

<template>
  <article class="break-inside-avoid overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:-translate-y-0.5">
    <CardContent v-bind="$props" />
  </article>
</template>
