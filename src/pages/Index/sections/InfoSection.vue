<script setup lang="ts">
import EmailIcon from '@/components/icons/EmailIcon.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
import TelegramIcon from '@/components/icons/TelegramIcon.vue'

const githubUrl = import.meta.env.VITE_GITHUB_URL
const telegramUrl = import.meta.env.VITE_TELEGRAM_URL
const emailUrl = import.meta.env.VITE_EMAIL_URL
</script>

<template>
  <section>
    <!-- Info -->
    <div class="mb-2 text-2xl font-semibold">
      <h1>Hi, I'm</h1>
      <div class="text-accent mt-2">
        <span class="text-sm text-gray-400">(en) </span>Ilya <br />
        <span class="text-sm text-gray-400">(ru) </span>Илья <br />
      </div>
    </div>
    <p class="mb-6 text-lg">
      (he/him)
    </p>
    <p class="mb-8 text-lg">
      web dev (backend / frontend), creating bots and automating scripts.
    </p>
    <!-- /Info -->
    <!-- Socials -->
    <div class="flex flex-wrap items-end gap-x-2">
      <ul class="grid grid-cols-4 items-center gap-x-4 gap-y-6 sm:flex-initial sm:grid-cols-8">
        <!-- Github -->
        <li class="mr-3 text-center">
          <a class="group sm:hover:text-link mb-1 inline-block" :href="githubUrl" rel="noreferrer me" target="_blank">
            <GithubIcon class="transition-all duration-150 group-hover:scale-105" />
            <span class="sr-only">GitHub</span>
          </a>
          <p>GitHub</p>
        </li>
        <!-- /Github -->
        <!-- Telegram -->
        <li class="mr-3 text-center">
          <a class="group sm:hover:text-link mb-1 inline-block" :href="telegramUrl" rel="noreferrer me" target="_blank">
            <TelegramIcon class="transition-all duration-150 group-hover:scale-105" />
            <span class="sr-only">Telegram</span>
          </a>
          <p>Telegram</p>
        </li>
        <!-- /Telegram -->
        <!-- Email -->
        <li class="mr-3 text-center">
          <a class="group sm:hover:text-link mb-1 inline-block" :href="emailUrl" rel="noreferrer" target="_blank">
            <EmailIcon class="transition-all duration-150 group-hover:scale-105" />
            <span class="sr-only">Email</span>
          </a>
          <p>Email</p>
        </li>
        <!-- /Email -->
      </ul>
    </div>
    <!-- /Socials -->
  </section>
</template>
