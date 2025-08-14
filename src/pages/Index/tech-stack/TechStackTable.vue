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
  <table class="w-full table-auto">
    <tbody class="border-accent border">
      <!-- Languages -->
      <tr class="border-accent border-b">
        <td class="border-accent border-r p-6 text-center text-base whitespace-nowrap">
          Languages
        </td>
        <td class="p-6">
          <ul class="flex flex-wrap gap-x-5 gap-y-5">
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
        </td>
      </tr>
      <!-- /Languages -->
      <!-- Frontend -->
      <tr class="border-accent border-b">
        <td class="border-accent border-r p-6 text-center text-base whitespace-nowrap">
          Frontend
        </td>
        <td class="p-6">
          <ul class="flex flex-wrap gap-x-5">
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
        </td>
      </tr>
      <!-- /Frontend -->
      <!-- Backend -->
      <tr class="border-accent border-b">
        <td class="border-accent border-r p-6 text-center text-base whitespace-nowrap">
          Backend
        </td>
        <td class="p-6">
          <ul class="flex flex-wrap gap-x-5">
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
        </td>
      </tr>
      <!-- /Backend -->
      <!-- Tools and DevOps -->
      <tr>
        <td class="border-accent border-r p-6 text-center text-base whitespace-nowrap">
          Tools / DevOps
        </td>
        <td class="p-6">
          <ul class="flex flex-wrap gap-x-5">
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
        </td>
      </tr>
      <!-- /Tools and DevOps -->
    </tbody>
  </table>
</template>
