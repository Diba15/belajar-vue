<script setup>

import CustomCard from '@/components/CustomCard.vue'

defineOptions({
  name: 'WorkPage',
})
</script>

<template>
  <div class="py-5 flex flex-col gap-5 min-h-fit max-w-screen-md mx-auto px-5 my-0 dark:text-white">
    <h1 class="font-bold text-center text-3xl">Portfolio</h1>
    <CustomCard />
  </div>
</template>

<style scoped>

</style>
