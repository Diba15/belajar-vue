<script setup>
import MainIcon from '@/components/icons/MainIcon.vue'

defineOptions({
  name: 'customNavbar',
})
</script>

<template>
  <nav class="bg-transparent flex p-5 text-white align-middle justify-between">
    <MainIcon
      class="border border-white p-5 transition-all duration-300 ease-in-out hover:scale-110"
    />
    <div class="flex flex-row gap-5">
      <a href="https://www.instagram.com/dimazzbagazz/" target="_blank"
        class="pi pi-instagram text-2xl transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer"
      ></a>
      <a href="https://github.com/Diba15" target="_blank"
        class="pi pi-github text-2xl transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer"
      ></a>
      <a href="https://www.linkedin.com/in/dimas-bagas-saputro-b2185373/" target="_blank"
        class="pi pi-linkedin text-2xl transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer"
      ></a>
    </div>
  </nav>
</template>

<style scoped></style>
