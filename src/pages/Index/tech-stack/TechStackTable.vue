<script setup lang="ts">
import {
  BashIcon,
  BootstrapIcon,
  CssIcon,
  DjangoIcon,
  DockerIcon,
  GitIcon,
  HtmlIcon,
  JavascriptIcon,
  JqueryIcon,
  LinuxIcon,
  NginxIcon,
  PostgresqlIcon,
  PythonIcon,
  RedisIcon,
  TailwindIcon,
  TypescriptIcon,
  VueIcon
} from '@/components/icons'
</script>

<template>
  <table class="w-full table-auto">
    <tbody class="border-border border">
      <!-- Languages -->
      <tr class="border-border border-b">
        <td class="border-border xs:py-6 border-r px-6 py-4 text-center text-base whitespace-nowrap not-sm:rotate-180 not-sm:[writing-mode:vertical-rl]">
          Languages
        </td>
        <td class="p-6">
          <ul class="not-xs:justify-center flex flex-wrap gap-5">
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
      <tr class="border-border border-b">
        <td class="border-border xs:py-6 border-r px-6 py-4 text-center text-base whitespace-nowrap not-sm:rotate-180 not-sm:[writing-mode:vertical-rl]">
          Frontend
        </td>
        <td class="p-6">
          <ul class="not-xs:justify-center flex flex-wrap gap-5">
            <li class="flex flex-col items-center gap-y-2.5">
              <VueIcon />
              <span class="text-xs tracking-wider">Vue</span>
            </li>
            <li class="flex flex-col items-center gap-y-2.5">
              <TailwindIcon />
              <span class="text-xs tracking-wider">Tailwind</span>
            </li>
            <li class="flex flex-col items-center gap-y-2.5">
              <CssIcon />
              <span class="text-xs tracking-wider">CSS</span>
            </li>
            <li class="flex flex-col items-center gap-y-2.5">
              <BootstrapIcon />
              <span class="text-xs tracking-wider">Bootstrap</span>
            </li>
            <li class="flex flex-col items-center gap-y-2.5">
              <HtmlIcon />
              <span class="text-xs tracking-wider">HTML</span>
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
      <tr class="border-border border-b">
        <td class="border-border xs:py-6 border-r px-6 py-4 text-center text-base whitespace-nowrap not-sm:rotate-180 not-sm:[writing-mode:vertical-rl]">
          Backend
        </td>
        <td class="p-6">
          <ul class="not-xs:justify-center flex flex-wrap gap-5">
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
        <td class="border-border xs:py-6 border-r px-6 py-4 text-center text-base whitespace-nowrap not-sm:rotate-180 not-sm:[writing-mode:vertical-rl]">
          Tools
        </td>
        <td class="p-6">
          <ul class="not-xs:justify-center flex flex-wrap gap-5">
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
