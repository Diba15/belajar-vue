<script setup>
import MainButton from '@/components/Button.vue'

defineOptions({
  name: 'WorkPage',
})
</script>

<template>
  <div class="py-5 flex flex-col gap-5 min-h-screen max-w-screen-md mx-auto px-5 dark:text-white">
    <h1 class="font-bold text-center text-3xl">Portfolio</h1>
    <MainButton button-name="Hello" />
  </div>
</template>

<style scoped>

</style>
