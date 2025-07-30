<script setup lang="ts"></script>

<template>
  <footer
    class="mt-auto flex w-full flex-col items-center justify-center gap-y-2 pt-20 pb-4 text-center align-top font-semibold text-gray-600 sm:flex-row sm:justify-between sm:text-xs dark:text-gray-400"
  >
    <div class="me-0 sm:me-4">© ၜassailance 2025.<span class="inline-block">&nbsp;🍙️&nbsp;(◕‿◕)</span></div>
    <!-- Navigation -->
    <nav aria-label="More on this site" class="flex gap-x-2 sm:gap-x-0 sm:divide-x sm:divide-gray-500">
      <!-- Links -->
      <RouterLink :to="{ name: 'index' }" class="hover:text-global-text px-4 py-2 hover:underline sm:py-0">Home</RouterLink>
      <a href="#projects" class="cursor-pointer px-4 py-4 underline-offset-2 hover:underline sm:py-0">Projects</a>
      <!-- /Links -->
    </nav>
    <!-- /Navigation -->
  </footer>
</template>
