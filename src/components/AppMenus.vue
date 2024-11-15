<script setup>
import { ref } from 'vue'

const isActive = ref('Home')

let scrollY = 0;

window.addEventListener('scroll', () => {
  scrollY = window.scrollY;
  document.getElementById('menuNav').style.background = scrollY > 0 ? 'rgba(33, 33, 36, 0.6)' : 'transparent';
  console.log(scrollY);
})
</script>

<template>
  <div id="menuNav" class="flex flex-row gap-8 self-center md:flex-col transition-all ease-in-out duration-300">
    <a @click="isActive = 'Home'"
       class="py-3 px-10 rounded-3xl transition-all duration-300 ease-in-out translate-x-0 hover:translate-x-4 hover:bg-green-600 md:pe-10 md:ps-16"
       :class="{ 'bg-green-600': isActive === 'Home' }"
       href="#/"
      ><i class="pi pi-home"></i> Home</a
    >
    <a
      @click="isActive = 'About'"
      class="py-3 px-10 rounded-3xl transition-all duration-300 ease-in-out translate-x-0 hover:translate-x-4 hover:bg-green-600 md:pe-10 md:ps-16"
      :class="{ 'bg-green-600': isActive === 'About' }"
      href="#/About"
      ><i class="pi pi-user"></i> About</a
    >
    <a
      @click="isActive = 'Back'"
      class="py-3 px-10 rounded-3xl self-center transition-all duration-300 ease-in-out translate-x-0 hover:translate-x-4 hover:bg-green-600 md:pe-10 md:ps-16"
      :class="{ 'bg-green-600': isActive === 'Back' }"
      href="#/Back"
      > <i class="pi pi-arrow-circle-left"></i> Back</a
    >
  </div>
</template>

<style scoped></style>
