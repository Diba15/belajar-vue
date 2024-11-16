<script setup>
import MainButton from '@/components/Button.vue'

defineOptions({
  name: 'AboutMe',
})
</script>

<template>
  <div class="py-5 flex flex-col gap-5 max-w-screen-md mx-auto px-5">
    <h1 class="font-bold text-center text-3xl">About</h1>
    <MainButton button-name="Hello" />
  </div>
</template>

<style scoped></style>
