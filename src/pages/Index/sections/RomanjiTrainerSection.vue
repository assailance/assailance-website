<script setup lang="ts">
import { KANA } from '@/constants/kana.const.ts'
import { onMounted, ref } from 'vue'

const current = ref<string | null>(null)
const currentRef = ref<HTMLSpanElement | null>(null)
const options = ref<string[]>([])
const optionRefs = ref<HTMLButtonElement[]>([])
const isSelected = ref<boolean>(false)
const correctAnswer = ref<string | null>(null)
const totalAnswers = ref<number>(0)
const correctAnswers = ref<number>(0)
const starIconRef = ref<HTMLElement | null>(null)

const generateRound = () => {
  const keys = Object.keys(KANA)
  current.value = keys[Math.floor(Math.random() * keys.length)]
  correctAnswer.value = KANA[current.value]

  const wrongAnswers = Object.values(KANA).filter(value => value !== correctAnswer.value)
  const shuffledWrong = [...wrongAnswers].sort(() => Math.random() - 0.5).slice(0, 3)
  options.value = [...shuffledWrong, correctAnswer.value].sort(() => Math.random() - 0.5)

  isSelected.value = false
}

const choose = (answer: string) => {
  isSelected.value = true
  const correctOption = optionRefs.value.find(o => o.textContent === correctAnswer.value) as HTMLButtonElement
  correctOption.setAttribute('data-correct', 'true')

  if (answer === correctAnswer.value) {
    currentRef.value?.setAttribute('data-correct', 'true')
    starIconRef.value?.setAttribute('data-correct', 'true')
    correctAnswers.value++
  } else {
    const selectedOption = optionRefs.value.find(o => o.textContent === answer) as HTMLButtonElement
    selectedOption.setAttribute('data-correct', 'false')
    currentRef.value?.setAttribute('data-correct', 'false')
  }
  totalAnswers.value++

  setTimeout(() => {
    starIconRef.value?.removeAttribute('data-correct')
    currentRef.value?.removeAttribute('data-correct')
    generateRound()
  }, 350)
}

onMounted(() => {
  generateRound()
})
</script>

<template>
  <section class="mt-16 mb-8">
    <!-- Header -->
    <h2 class="mb-2.5 text-xl">
      Romanji Trainer <span class="text-sm text-gray-400">(fan)</span>
    </h2>
    <p class="mb-12 text-gray-600 dark:text-gray-400">
      Mini game for learning hiragana and katakana.
    </p>
    <!-- /Header -->
    <!-- Mini Game -->
    <div class="mx-auto max-w-2/3 text-center">
      <!-- Stats -->
      <div class="mb-16 flex items-center justify-between px-2.5">
        <!-- Star -->
        <svg
          ref="starIconRef"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          stroke="currentColor"
          stroke-width="2"
          class="data-[correct=true]:fill-global-text size-6 transition-all duration-300 data-[correct=true]:scale-125 data-[correct=true]:rotate-30"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
          />
        </svg>
        <!-- /Star -->
        <!-- Score -->
        <span class="inline-block text-xs">
          <span class="text-lg">{{ correctAnswers }}</span> / {{ totalAnswers }}
        </span>
        <!-- /Score -->
      </div>
      <!-- /Stats -->
      <!-- Question -->
      <Transition name="fade" mode="out-in" :duration="200">
        <span
          :key="current as string"
          ref="currentRef"
          class="data-[correct=false]:animate-horizontal-shake data-[correct=true]:animate-zoom-in-out inline-block text-[10rem] leading-[1]"
        >
          {{ current }}
        </span>
      </Transition>
      <!-- /Question -->
      <!-- Answers -->
      <Transition name="fade-slide" mode="out-in" :duration="200">
        <div :key="current as string" class="mt-8 grid grid-cols-2 gap-5">
          <button
            v-for="option in options"
            :key="option"
            ref="optionRefs"
            v-press-animate
            :disabled="isSelected"
            class="data-[correct=true]:border-global-text data-[correct=true]:bg-global-text data-[correct=true]:text-global-bg border-border not-disabled:hover:border-global-text data-[correct=false]:bg-border/50 flex h-24 items-center justify-center rounded-3xl border text-2xl transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-75 data-[correct]:disabled:opacity-100 data-[correct=false]:border-none"
            @click="choose(option)"
          >
            {{ option }}
          </button>
        </div>
      </Transition>
      <!-- /Answers -->
    </div>
    <!-- /Mini Game -->
  </section>
</template>

<style scoped>
.fade-slide-leave-from,
.fade-slide-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.fade-slide-leave-active,
.fade-slide-enter-active {
  transition:
    opacity 0.3s ease-in-out,
    transform 0.3s ease-in-out;
}

.fade-slide-leave-to,
.fade-slide-enter-from {
  transform: translateY(10px);
  opacity: 0;
}
</style>
