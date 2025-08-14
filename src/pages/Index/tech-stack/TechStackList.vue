<script setup lang="ts">
import BashIcon from '@/components/icons/BashIcon.vue'
import BootstrapIcon from '@/components/icons/BootstrapIcon.vue'
import CssIcon from '@/components/icons/CssIcon.vue'
import DjangoIcon from '@/components/icons/DjangoIcon.vue'
import DockerIcon from '@/components/icons/DockerIcon.vue'
import GitIcon from '@/components/icons/GitIcon.vue'
import HtmlIcon from '@/components/icons/HtmlIcon.vue'
import JavascriptIcon from '@/components/icons/JavascriptIcon.vue'
import JqueryIcon from '@/components/icons/JqueryIcon.vue'
import LinuxIcon from '@/components/icons/LinuxIcon.vue'
import NginxIcon from '@/components/icons/NginxIcon.vue'
import PostgresqlIcon from '@/components/icons/PostgresqlIcon.vue'
import PythonIcon from '@/components/icons/PythonIcon.vue'
import RedisIcon from '@/components/icons/RedisIcon.vue'
import TailwindIcon from '@/components/icons/TailwindIcon.vue'
import TypescriptIcon from '@/components/icons/TypescriptIcon.vue'
import VueIcon from '@/components/icons/VueIcon.vue'
</script>

<template>
  <ul class="flex flex-col gap-y-5">
    <!-- Languages -->
    <li>
      <p class="mb-2.5 text-lg">
        Languages:
      </p>
      <ul class="flex w-auto flex-wrap gap-x-7">
        <li class="flex flex-col items-center gap-y-2.5">
          <PythonIcon />
          <span class="text-xs tracking-wider">Python</span>
        </li>
        <li class="flex flex-col items-center gap-y-2.5">
          <JavascriptIcon />
          <span class="text-xs tracking-wider">JavaScript</span>
        </li>
        <li class="flex flex-col items-center gap-y-2.5">
          <BashIcon />
          <span class="text-xs tracking-wider">Bash</span>
        </li>
        <li class="flex flex-col items-center gap-y-2.5">
          <TypescriptIcon />
          <span class="text-xs tracking-wider">TypeScript</span>
        </li>
      </ul>
    </li>
    <!-- /Languages -->
    <li class="bg-global-text mb-4 h-[0.5px] w-40" />
    <!-- Frontend -->
    <li>
      <p class="mb-2.5 text-lg">
        Frontend:
      </p>
      <ul class="flex flex-wrap gap-x-7">
        <li class="flex flex-col items-center gap-y-2.5">
          <HtmlIcon />
          <span class="text-xs tracking-wider">HTML</span>
        </li>
        <li class="flex flex-col items-center gap-y-2.5">
          <CssIcon />
          <span class="text-xs tracking-wider">CSS</span>
        </li>
        <li class="flex flex-col items-center gap-y-2.5">
          <TailwindIcon />
          <span class="text-xs tracking-wider">Tailwind</span>
        </li>
        <li class="flex flex-col items-center gap-y-2.5">
          <VueIcon />
          <span class="text-xs tracking-wider">Vue</span>
        </li>
        <li class="flex flex-col items-center gap-y-2.5">
          <BootstrapIcon />
          <span class="text-xs tracking-wider">Bootstrap</span>
        </li>
        <li class="flex flex-col items-center gap-y-2.5">
          <JqueryIcon />
          <span class="text-xs tracking-wider">JQuery</span>
        </li>
      </ul>
    </li>
    <!-- /Frontend -->
    <li class="bg-global-text mb-4 h-[0.5px] w-40" />
    <!-- Backend -->
    <li>
      <p class="mb-2.5 text-lg">
        Backend:
      </p>
      <ul class="flex flex-wrap gap-x-7">
        <li class="flex flex-col items-center gap-y-2.5">
          <DjangoIcon />
          <span class="text-xs tracking-wider">Django</span>
        </li>
        <li class="flex flex-col items-center gap-y-2.5">
          <PostgresqlIcon />
          <span class="text-xs tracking-wider">PostgreSQL</span>
        </li>
        <li class="flex flex-col items-center gap-y-2.5">
          <RedisIcon />
          <span class="text-xs">Redis</span>
        </li>
      </ul>
    </li>
    <!-- /Backend -->
    <li class="bg-global-text mb-4 h-[0.5px] w-40" />
    <!-- Tools and DevOps -->
    <li>
      <p class="mb-2.5 text-lg">
        Tools and DevOps:
      </p>
      <ul class="flex flex-wrap gap-x-7">
        <li class="flex flex-col items-center gap-y-2.5">
          <GitIcon />
          <span class="text-xs tracking-wider">Git</span>
        </li>
        <li class="flex flex-col items-center gap-y-2.5">
          <DockerIcon />
          <span class="text-xs tracking-wider">Docker</span>
        </li>
        <li class="flex flex-col items-center gap-y-2.5">
          <NginxIcon />
          <span class="text-xs tracking-wider">Nginx</span>
        </li>
        <li class="flex flex-col items-center gap-y-2.5">
          <LinuxIcon />
          <span class="text-xs">Linux</span>
        </li>
      </ul>
    </li>
    <!-- /Tools and DevOps -->
  </ul>
</template>
