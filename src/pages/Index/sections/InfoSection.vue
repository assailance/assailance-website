<script setup lang="ts">
import { EmailIcon, GithubIcon, TelegramIcon } from '@/components/icons'

const githubUrl = import.meta.env.VITE_GITHUB_URL
const telegramUrl = import.meta.env.VITE_TELEGRAM_URL
const emailUrl = import.meta.env.VITE_EMAIL_URL
</script>

<template>
  <section>
    <!-- Info -->
    <h1 class="mb-2 text-2xl font-semibold">
      <span>Hi, I'm</span> <br />
      <span class="sr-only">Ilya</span>
      <span class="text-accent mt-2 inline-block" aria-hidden="true">
        <span class="text-sm text-gray-400">(en) </span>Ilya <br />
        <span class="text-sm text-gray-400">(ja) </span>イリヤ <br />
        <span class="text-sm text-gray-400">(zh) </span>伊利亞 <br />
      </span>
    </h1>
    <p class="mb-6 text-lg">(he/him)</p>
    <p class="mb-8 text-lg">web dev (backend / frontend), creating bots and automating scripts.</p>
    <!-- /Info -->
    <!-- Socials -->
    <div class="flex flex-wrap items-end gap-x-2">
      <ul class="xs:gap-x-8 flex items-center gap-x-6">
        <!-- Github -->
        <li class="text-center">
          <a class="group sm:hover:text-link mb-1 inline-block" :href="githubUrl" rel="noreferrer me" target="_blank">
            <GithubIcon class="transition-all duration-150 group-hover:scale-105" />
            <span class="sr-only">GitHub</span>
          </a>
          <p>GitHub</p>
        </li>
        <!-- /Github -->
        <!-- Telegram -->
        <li class="text-center">
          <a class="group sm:hover:text-link mb-1 inline-block" :href="telegramUrl" rel="noreferrer me" target="_blank">
            <TelegramIcon class="transition-all duration-150 group-hover:scale-105" />
            <span class="sr-only">Telegram</span>
          </a>
          <p>Telegram</p>
        </li>
        <!-- /Telegram -->
        <!-- Email -->
        <li class="text-center">
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
