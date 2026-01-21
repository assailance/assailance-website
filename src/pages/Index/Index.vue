<script lang="ts" setup>
import InfoSection from "@/pages/Index/sections/InfoSection.vue"
import ProjectsSection from "@/pages/Index/sections/ProjectsSection.vue"
import RepositoriesSection from "@/pages/Index/sections/RepositoriesSection.vue"
import RomanjiTrainerSection from "@/pages/Index/sections/RomanjiTrainerSection.vue"
import TechStackSection from "@/pages/Index/sections/TechStackSection.vue"
</script>

<template>
  <InfoSection />
  <ProjectsSection />
  <TechStackSection />
  <RepositoriesSection />
  <div class="bg-border mx-auto mt-20 h-px w-16"></div>
  <RomanjiTrainerSection />
</template>
