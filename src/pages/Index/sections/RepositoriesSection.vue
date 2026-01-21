<script setup lang="ts">
import { Card, CardList } from "@/components/ui/card-list"
</script>

<template>
  <section class="mt-20">
    <h2 class="mb-4 text-xl">Repositories</h2>
    <!-- Repositories -->
    <CardList>
      <Card
        title="PixAI Daily Rewards"
        title-link="https://github.com/assailance/pixai-daily-rewards"
        description="Get PixAI's daily reward using Selenium."
        :tags="['python', 'docker', 'selenium', 'uv']"
      />
      <Card title="Github README" title-link="https://github.com/assailance/assailance" description="Main github page with more info about me." />
      <Card
        title="Plasma Dotfiles"
        title-link="https://github.com/assailance/plasma-dotfiles"
        description="My KDE Plasma dotfiles and configuration."
        :tags="['KDE', 'X11', 'Wayland']"
      />
      <Card
        title="Backup Scripts"
        title-link="https://github.com/assailance/backup-scripts"
        description="Bash scripts for creating backups and sending them to Telegram chat."
        :tags="['shell', 'bash', 'backup']"
      />
      <Card
        title="First Project"
        title-link="https://github.com/assailance/proj2"
        description="My first project built with HTML, CSS, and JS."
        external-link="https://assailance.github.io/proj2/"
        :tags="['HTML', 'CSS', 'JavaScript']"
      />
    </CardList>
    <!-- /Repositories -->
    <!-- View all -->
    <div class="mt-6 text-end sm:mt-4">
      <a
        aria-label="View all repositories"
        class="group sm:hover:text-accent transition-colors duration-200"
        href="https://github.com/assailance?tab=repositories"
        target="_blank"
      >
        View all <span class="inline-block -translate-y-0.5 transition-transform duration-200 group-hover:translate-x-0.5">→</span>
      </a>
    </div>
    <!-- /View all -->
  </section>
</template>
