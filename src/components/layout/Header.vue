<script setup lang="ts">
import MoonIcon from '@/components/icons/MoonIcon.vue'
import SunIcon from '@/components/icons/SunIcon.vue'
import { useTheme } from '@/composables/theme.composable.ts'
import { useToast } from '@/composables/toast.composable.ts'

const { add } = useToast()
const { toggleTheme } = useTheme()

const changeTheme = () => {
  try {
    toggleTheme()
  } catch {
    add('Unable to toggle theme')
  }
}
</script>

<template>
  <header class="group relative mb-28 flex items-center sm:ps-18">
    <!-- Left -->
    <div class="flex sm:flex-col">
      <!-- Logo -->
      <a href="/" class="inline-flex items-center sm:relative sm:inline-block">
        <img
          src="@/assets/images/dark-avatar.webp"
          alt="assailance"
          loading="eager"
          decoding="async"
          width="64"
          height="64"
          class="me-4 inline-block size-16 rounded-md sm:absolute sm:start-[-5rem] sm:me-0 sm:h-16 sm:w-16 dark:hidden"
        />
        <img
          src="@/assets/images/light-avatar.webp"
          alt="assailance"
          loading="eager"
          decoding="async"
          width="64"
          height="64"
          class="me-4 size-16 rounded-md not-dark:hidden sm:absolute sm:start-[-5rem] sm:me-0 sm:h-16 sm:w-16"
        />
        <span class="text-xl font-bold sm:text-2xl">ၜassailance</span>
      </a>
      <!-- /Logo -->

      <!-- Navigation -->
      <nav
        class="text-accent bg-global-bg/85 sm:divide-accent/75 absolute -inset-x-4 top-14 hidden flex-col items-end gap-y-4 rounded-md py-4 shadow backdrop-blur-sm group-[.menu-open]:z-50 group-[.menu-open]:flex sm:static sm:z-auto sm:-ms-4 sm:mt-1 sm:flex sm:flex-row sm:items-center sm:divide-x sm:rounded-none sm:bg-transparent sm:py-0 sm:shadow-none sm:backdrop-blur-none"
      >
        <a href="/" class="px-4 py-4 underline-offset-2 hover:underline sm:py-0"> Home </a>
        <a href="#projects" class="cursor-pointer px-4 py-4 underline-offset-2 hover:underline sm:py-0">Projects</a>
        <a href="#stack" class="cursor-pointer px-4 py-4 underline-offset-2 hover:underline sm:py-0">Stack</a>
      </nav>
      <!-- /Navigation -->
    </div>
    <!-- /Left -->

    <!-- Theme -->
    <div class="ms-2 sm:ms-auto">
      <button
        v-press-animate
        class="hover:text-accent relative size-9 cursor-pointer rounded-md p-2 transition-transform duration-200 hover:scale-105"
        type="button"
        role="switch"
        @click="changeTheme"
      >
        <span class="sr-only">Dark Theme</span>
        <MoonIcon class="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 not-dark:hidden" />
        <SunIcon class="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 dark:hidden" />
      </button>
    </div>
    <!-- /Theme -->
  </header>
</template>
