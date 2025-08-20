<script setup lang="ts">
import TechStackList from '@/pages/Index/tech-stack/TechStackList.vue'
import TechStackTable from '@/pages/Index/tech-stack/TechStackTable.vue'
import { nextTick, onMounted, ref } from 'vue'

const tabs = ['Table', 'List']
const selected = ref<number>(0)
const tabRefs = ref<HTMLButtonElement[]>([])
const highlightStyle = ref({
  width: '0px',
  transform: 'translateX(0px)'
})

const updateHighlight = () => {
  const el = tabRefs.value[selected.value]
  if (el) {
    highlightStyle.value = {
      width: `${el.offsetWidth}px`,
      transform: `translateX(${el.offsetLeft - 4}px)`
    }
  }
}

const selectTab = (index: number) => {
  selected.value = index
  updateHighlight()
}

onMounted(() => {
  nextTick(updateHighlight)
})
</script>

<template>
  <section id="stack" class="mt-20">
    <div class="mb-4 flex items-center justify-between">
      <h2 class="text-xl">Tech stack</h2>
      <!-- Tabs -->
      <div class="bg-secondary-bg relative flex w-max items-center rounded-lg p-1" role="tablist" aria-label="View switcher">
        <!-- Highlight -->
        <div
          class="bg-accent/5 absolute top-1 h-[calc(100%-8px)] rounded-lg transition-all duration-300 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)]"
          :style="highlightStyle"
          aria-hidden="true"
        ></div>
        <!-- /Highlight -->
        <!-- Tab Buttons -->
        <button
          v-for="(tab, index) in tabs"
          :key="tab"
          ref="tabRefs"
          class="relative z-10 rounded-lg px-3 py-1.5 text-xs transition-colors duration-150"
          :class="{
            'text-accent/75': selected === index,
            'text-accent/50 hover:text-accent/75': selected !== index
          }"
          role="tab"
          :aria-selected="selected === index"
          :aria-controls="'tabpanel-' + index"
          type="button"
          @click="selectTab(index)"
        >
          {{ tab }}
        </button>
        <!-- /Tab Buttons -->
      </div>
      <!-- /Tabs -->
    </div>

    <!-- Tab Content -->
    <Transition name="fade" mode="out-in">
      <TechStackTable v-if="selected === 0" id="tabpanel-0" role="tabpanel" />
      <TechStackList v-else id="tabpanel-1" role="tabpanel" />
    </Transition>
    <!-- /Tab Content -->
  </section>
</template>
