<script setup lang="ts">
import { XIcon } from "@/components/icons"
import { useTemplateRef } from "vue"
import BaseModal from "./BaseModal.vue"

const model = defineModel<boolean>({ required: true })

const baseModalRef = useTemplateRef<InstanceType<typeof BaseModal>>("baseModal")
</script>

<template>
  <BaseModal ref="baseModal" v-model="model">
    <!-- Modal -->
    <div class="border-border bg-global-bg absolute top-1/2 left-1/2 w-full max-w-lg -translate-1/2 rounded-xl border p-6 shadow-md">
      <!-- Content -->
      <slot />
      <!-- /Content -->
      <!-- Close -->
      <button
        v-press-animate
        title="Close"
        class="text-global-text/85 hover:text-accent absolute top-4 right-4 transition-colors duration-200"
        aria-label="Close modal"
        @click="baseModalRef?.close()"
      >
        <XIcon />
      </button>
      <!-- /Close -->
    </div>
    <!-- /Modal -->
  </BaseModal>
</template>
