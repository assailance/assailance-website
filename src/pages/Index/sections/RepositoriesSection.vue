<script setup lang="ts">
import LinkIcon from '@/components/icons/LinkIcon.vue'
</script>

<template>
  <section class="mt-16">
    <h2 class="mb-4 text-xl">Repositories</h2>
    <dl class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <!-- Readme -->
      <div class="text-accent bg-secondary-bg rounded-lg p-4 shadow-md transition-all duration-300 hover:-translate-y-0.5">
        <dt class="flex items-center">
          <a class="font-semibold underline underline-offset-2" href="https://github.com/assailance/assailance" rel="noreferrer" target="_blank">
            Github README
          </a>
        </dt>
        <dd class="text-accent-2/75 mt-2">Main github page with more info about me.</dd>
      </div>
      <!-- /Readme -->
      <!-- First Project -->
      <div class="text-accent bg-secondary-bg rounded-lg p-4 shadow-md transition-all duration-300 hover:-translate-y-0.5">
        <dt class="flex items-center justify-between gap-2.5">
          <a class="font-semibold underline underline-offset-2" href="https://github.com/assailance/proj2" rel="noreferrer" target="_blank">First Project</a>
          <a
            title="Go to the project"
            href="https://assailance.github.io/proj2/"
            rel="noreferrer"
            target="_blank"
            class="text-accent-2 hover:text-accent transition-all duration-300 hover:scale-105"
          >
            <LinkIcon />
          </a>
        </dt>
        <dd class="text-accent-2/75 mt-2">My first project built with HTML, CSS, and JS.</dd>
      </div>
      <!-- /First Project -->
      <!-- Plasma Dotfiles -->
      <div class="text-accent bg-secondary-bg rounded-lg p-4 shadow-md transition-all duration-300 hover:-translate-y-0.5">
        <dt class="flex items-center justify-between gap-2.5">
          <a class="font-semibold underline underline-offset-2" href="https://github.com/assailance/plasma-dotfiles" rel="noreferrer" target="_blank">
            Plasma Dotfiles
          </a>
        </dt>
        <dd class="text-accent-2/75 mt-2">My KDE Plasma dotfiles and configuration.</dd>
      </div>
      <!-- /Plasma Dotfiles -->
    </dl>
    <!-- View all -->
    <div class="mt-4 sm:text-end">
      <a aria-label="View all repositories" class="sm:hover:text-accent transition-colors duration-200" href="https://github.com/assailance?tab=repositories">
        View all →
      </a>
    </div>
    <!-- /View all -->
  </section>
</template>
