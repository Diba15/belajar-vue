<script setup>
import MainIcon from '@/components/icons/MainIcon.vue'

defineOptions({
  name: 'customNavbar',
})
</script>

<template>
  <nav class="bg-transparent flex p-5 text-white align-middle justify-between">
    <MainIcon class="border border-white p-5 transition-all duration-300 ease-in-out hover:scale-110" />
  </nav>
</template>

<style scoped></style>
