<script setup lang="ts">
import MenuIcon from '@/components/icons/MenuIcon.vue'
import MoonIcon from '@/components/icons/MoonIcon.vue'
import SunIcon from '@/components/icons/SunIcon.vue'
import XIcon from '@/components/icons/XIcon.vue'
import { useTheme } from '@/composables/theme.composable.ts'
import { useToast } from '@/composables/toast.composable.ts'
import { ref } from 'vue'

const { add } = useToast()
const { toggleTheme } = useTheme()

const menuOpen = ref<boolean>(false)

const changeTheme = () => {
  try {
    toggleTheme()
  } catch {
    add('Unable to toggle theme')
  }
}
</script>

<template>
  <header class="group xs:ps-18 xs:mb-28 relative mb-24 flex items-center">
    <!-- Left -->
    <div class="xs:flex-col flex">
      <!-- Logo -->
      <a href="/" class="xs:relative xs:inline-block inline-flex items-center">
        <img
          src="/dark-avatar.webp"
          alt="assailance"
          loading="eager"
          decoding="async"
          width="64"
          height="64"
          class="xs:absolute xs:start-[-5rem] xs:me-0 xs:size-16 me-3 size-14 rounded-md dark:hidden"
        />
        <img
          src="/light-avatar.webp"
          alt="assailance"
          loading="eager"
          decoding="async"
          width="64"
          height="64"
          class="xs:absolute xs:start-[-5rem] xs:me-0 xs:size-16 me-3 size-14 rounded-md not-dark:hidden"
        />
        <span class="xs:text-2xl text-lg font-bold">ၜassailance</span>
      </a>
      <!-- /Logo -->

      <!-- Navigation -->
      <nav
        :data-open="menuOpen"
        aria-label="Main menu"
        class="text-accent bg-secondary-bg/25 xs:divide-accent/75 xs:visible xs:static xs:z-auto xs:-ms-4 xs:mt-1 xs:flex xs:flex-row xs:items-center xs:divide-x xs:rounded-none xs:bg-transparent xs:px-0 xs:py-0 xs:shadow-none xs:backdrop-blur-none invisible absolute -inset-x-2 top-12 z-50 hidden flex-col items-end gap-y-4 rounded-md px-2 py-4 shadow backdrop-blur-sm data-[open=true]:visible data-[open=true]:z-50 data-[open=true]:flex"
      >
        <a href="#" class="xs:py-0 px-4 py-2 underline-offset-2 hover:underline">Home</a>
        <a href="#projects" class="xs:py-0 px-4 py-2 underline-offset-2 hover:underline">Projects</a>
        <a href="#stack" class="xs:py-0 px-4 py-2 underline-offset-2 hover:underline">Stack</a>
      </nav>
      <!-- /Navigation -->
    </div>
    <!-- /Left -->

    <!-- Theme -->
    <button
      v-press-animate
      class="hover:text-accent relative ms-auto flex size-9 cursor-pointer items-center justify-center rounded-md transition-transform duration-200 hover:scale-105"
      type="button"
      role="switch"
      @click="changeTheme"
    >
      <span class="sr-only">Dark Theme</span>
      <MoonIcon class="not-dark:hidden" />
      <SunIcon class="dark:hidden" />
    </button>
    <!-- /Theme -->

    <!-- Open Menu -->
    <button
      v-press-animate
      :aria-expanded="menuOpen"
      aria-haspopup="menu"
      type="button"
      class="group xs:invisible xs:hidden ms-2 transition-transform duration-200 hover:scale-105"
      @click="menuOpen = !menuOpen"
    >
      <span class="sr-only">Open main menu</span>
      <XIcon v-if="menuOpen" class="text-global-text/75 !size-7" />
      <MenuIcon v-else />
    </button>
    <!-- /Open Menu -->
  </header>
</template>
