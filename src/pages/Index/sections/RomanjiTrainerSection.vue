<script setup lang="ts">
import { StarIcon } from '@/components/icons'
import { KANA } from '@/constants/kana.const.ts'
import { onMounted, ref, useTemplateRef } from 'vue'

const question = ref<string | null>(null)
const options = ref<string[]>([])
const isSelected = ref<boolean>(false)
const correctAnswer = ref<string | null>(null)
const totalAnswers = ref<number>(0)
const correctAnswers = ref<number>(0)

const currentRef = useTemplateRef<HTMLSpanElement>('current')
const optionRefs = useTemplateRef<HTMLButtonElement[]>('option')
const starRef = useTemplateRef<HTMLSpanElement>('star')

const generateRound = () => {
  const keys = Object.keys(KANA)
  question.value = keys[Math.floor(Math.random() * keys.length)]
  correctAnswer.value = KANA[question.value]

  const wrongAnswers = Object.values(KANA).filter(value => value !== correctAnswer.value)
  const shuffledWrong = [...wrongAnswers].sort(() => Math.random() - 0.5).slice(0, 3)
  options.value = [...shuffledWrong, correctAnswer.value].sort(() => Math.random() - 0.5)
}

const choose = (answer: string) => {
  isSelected.value = true

  const correctOption = optionRefs.value?.find(o => o.textContent === correctAnswer.value) as HTMLButtonElement
  correctOption.setAttribute('data-correct', 'true')

  if (answer === correctAnswer.value) {
    currentRef.value?.setAttribute('data-correct', 'true')
    starRef.value?.setAttribute('data-correct', 'true')
    correctAnswers.value++
  } else {
    const selectedOption = optionRefs.value?.find(o => o.textContent === answer) as HTMLButtonElement
    selectedOption.setAttribute('data-correct', 'false')
    currentRef.value?.setAttribute('data-correct', 'false')
  }
  totalAnswers.value++

  setTimeout(() => {
    starRef.value?.removeAttribute('data-correct')
    currentRef.value?.removeAttribute('data-correct')
    generateRound()
    isSelected.value = false
  }, 350)
}

onMounted(() => {
  generateRound()
})
</script>

<template>
  <section class="mt-20">
    <!-- Header -->
    <h2 class="mb-2.5 text-xl">Romanji Trainer <span class="text-sm text-gray-400">(fan)</span></h2>
    <p class="mb-12 text-gray-600 dark:text-gray-400">Mini game for learning hiragana and katakana.</p>
    <!-- /Header -->
    <!-- Mini Game -->
    <div class="mx-auto text-center sm:max-w-[500px]">
      <!-- Stats -->
      <div class="mb-16 flex items-center justify-between px-2.5">
        <!-- Star -->
        <span ref="star" class="group">
          <StarIcon
            class="group-data-[correct=true]:fill-global-text transition-all duration-300 group-data-[correct=true]:scale-125 group-data-[correct=true]:rotate-30"
          />
        </span>
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
          :key="question as string"
          ref="current"
          class="data-[correct=false]:animate-horizontal-shake data-[correct=true]:animate-zoom-in-out inline-block text-[10rem] leading-[1]"
        >
          {{ question }}
        </span>
      </Transition>
      <!-- /Question -->
      <!-- Answers -->
      <Transition name="fade-slide" mode="out-in" :duration="200">
        <div :key="question as string" class="xs:gap-5 mt-8 grid grid-cols-2 gap-3">
          <button
            v-for="option in options"
            :key="option"
            ref="option"
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
