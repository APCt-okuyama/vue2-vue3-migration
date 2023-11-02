<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
//import { ref } from 'vue'

defineProps<{ msg: string }>()

</script>

<template>
  <div>
    <carousel :items-to-show="1">
    <slide v-for="slide in 10" :key="slide">
      <div>
      {{ slide }}
      <img style="width: 100px;" src="https://picsum.photos/1024/512" />
      <img style="width: 100px;" src="https://picsum.photos/512/1024" />
      <img style="width: 100px;" src="https://picsum.photos/512" />
    </div>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
