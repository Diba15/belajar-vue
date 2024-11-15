<script setup>
import MainButton from '@/components/Button.vue'
import { ref } from 'vue'

defineOptions({
  name: 'HomeMe',
})

const count = ref(0)
</script>

<template>
  <div class="py-5 flex flex-col gap-5 max-w-screen-md mx-auto px-5">
    <h1 class="font-bold text-center text-3xl">Home</h1>
   <MainButton @click="count++" button-name="Hello" />
    <p class="text-center">{{ count }}</p>
  </div>
</template>

<style scoped></style>
