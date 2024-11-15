<script setup>
import MainIcon from '@/components/icons/MainIcon.vue'

defineOptions({
  name: "customFooter"
})
</script>

<template>
  <footer class="bg-[#22303C] flex p-5 text-white align-middle justify-between">
    <MainIcon />
    <p class="font-bold text-2xl font-sans">Copyright &copy; 2024</p>
  </footer>
</template>

<style scoped>

</style>
