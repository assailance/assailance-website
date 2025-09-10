<script setup lang="ts">
import { ChevronRightIcon, LoaderCircleIcon } from '@/components/icons'
import { useToast } from '@/composables/toast.composable.ts'
import { nextTick, shallowRef, useTemplateRef } from 'vue'

const { add } = useToast()

const endpoint = import.meta.env.VITE_SEND_MESSAGE_ENDPOINT

const messageRef = useTemplateRef<HTMLInputElement>('message')
const text = shallowRef<string>('')
const isSending = shallowRef<boolean>(false)

const send = async () => {
  if (!text.value || isSending.value) return
  isSending.value = true

  try {
    const res = await fetch(`${endpoint}?text=${encodeURIComponent(text.value)}`)

    if (!res.ok) throw new Error()

    text.value = ''
    add('Message sent!')
  } catch {
    add('Failed to send message')
    await nextTick()
    messageRef.value?.focus()
  } finally {
    isSending.value = false
  }
}
</script>

<template>
  <footer class="pt-16 pb-6 sm:pt-20">
    <!-- Divider -->
    <div class="bg-border mx-auto mb-16 h-px w-16 sm:mb-20"></div>
    <!-- /Divider -->

    <!-- Send Message -->
    <div class="xs:flex-row mb-12 flex flex-col items-center gap-x-6 gap-y-4 sm:gap-x-8">
      <div
        role="presentation"
        aria-hidden="true"
        class="gif-decoration xs:w-min xs:min-w-32 not-xs:h-[72px] w-full self-stretch overflow-hidden rounded-2xl bg-cover bg-center"
      ></div>
      <!-- Form -->
      <form class="flex h-full w-full flex-col gap-y-2 text-xs" aria-describedby="form-desc" @submit.prevent="send">
        <div class="flex items-center gap-x-2.5">
          <!-- Loader -->
          <LoaderCircleIcon v-if="isSending" class="text-global-text animate-spin" />
          <!-- /Loader -->
          <!-- Message -->
          <label for="message" class="sr-only">Your message</label>
          <input
            id="message"
            ref="message"
            v-model="text"
            placeholder="Your message"
            :disabled="isSending"
            class="border-border text-global-text focus:border-global-text placeholder:text-global-text/50 h-10 w-full rounded-lg border px-4 leading-10 outline-none disabled:cursor-not-allowed disabled:opacity-60"
          />
          <!-- /Message -->
          <button
            type="submit"
            :disabled="isSending || !text"
            class="bg-secondary-bg text-global-text/75 flex size-10 items-center justify-center rounded-lg transition-transform duration-150 not-disabled:hover:scale-[1.03] not-disabled:hover:-rotate-12 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <ChevronRightIcon class="!size-5" />
          </button>
        </div>
        <!-- Description -->
        <p id="form-desc" class="text-global-text/75">Send me an anonymous message on telegram.</p>
        <!-- /Description -->
        <div aria-live="polite" class="sr-only">
          {{ isSending ? 'Sending message…' : '' }}
        </div>
      </form>
      <!-- /Form -->
    </div>
    <!-- /Send Message -->

    <!-- Bottom -->
    <div
      class="flex flex-col items-center justify-center gap-y-2 text-center align-top font-semibold text-gray-600 sm:flex-row sm:justify-between sm:text-xs dark:text-gray-400"
    >
      <div class="me-0 sm:me-4">© ၜassailance 2025.<span class="inline-block">&nbsp;🍙️&nbsp;(◕‿◕)</span></div>
      <!-- Navigation -->
      <nav aria-label="More on this site" class="flex gap-x-2 sm:gap-x-0 sm:divide-x sm:divide-gray-500">
        <!-- Links -->
        <a href="/" class="hover:text-global-text px-4 py-2 hover:underline sm:py-0">Home</a>
        <a href="#projects" class="px-4 py-2 underline-offset-2 hover:underline sm:py-0">Projects</a>
        <a href="#stack" class="px-4 py-2 underline-offset-2 hover:underline sm:py-0">Stack</a>
        <!-- /Links -->
      </nav>
      <!-- /Navigation -->
    </div>
    <!-- /Bottom -->
  </footer>
</template>

<style scoped>
:not([data-theme='dark']) .gif-decoration {
  background-image: url('/badge-light.gif');
}

[data-theme='dark'] .gif-decoration {
  background-image: url('/badge-dark.gif');
}
</style>
