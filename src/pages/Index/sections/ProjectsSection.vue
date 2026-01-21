<script setup lang="ts">
import { CardList, CardWithImage } from "@/components/ui/card-list"

const skadeshopImages = [
  "/skadeshop/banner.webp",
  "/skadeshop/1.webp",
  "/skadeshop/2.webp",
  "/skadeshop/3.webp",
  "/skadeshop/4.webp",
  "/skadeshop/5.webp",
  "/skadeshop/6.webp",
  "/skadeshop/7.webp",
  "/skadeshop/8.webp",
  "/skadeshop/9.webp",
  "/skadeshop/10.webp"
]
</script>

<template>
  <section id="projects" class="mt-20">
    <h2 class="mb-4 text-xl">Projects</h2>
    <!-- Projects -->
    <CardList>
      <CardWithImage
        title="Skadeshop"
        title-link="https://skadeshop.assailance.ru/"
        description="А full-fledged trading platform for selling minecraft accounts."
        external-link="https://skadeshop.assailance.ru/"
        :tags="['Python', 'Django', 'DRF', 'Vue', 'JavaScript', 'Tailwind', 'OAuth2']"
        :images="skadeshopImages"
      />
    </CardList>
    <!-- /Projects -->
  </section>
</template>
