<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div
    id="menuNav"
    class="flex flex-row gap-8 self-center md:flex-col transition-all ease-in-out duration-300 md:bg-transparent"
  >
    <RouterLink
      to="/"
      id="homeNav"
      class="cursor-pointer py-3 px-10 rounded-3xl transition-all duration-300 ease-in-out translate-x-0 hover:translate-x-4 hover:bg-green-600 md:pe-10 md:ps-16"
      ><i class="pi pi-home"></i> Home
    </RouterLink>
    <RouterLink
      to="/About"
      id="aboutNav"
      class="cursor-pointer py-3 px-10 rounded-3xl transition-all duration-300 ease-in-out translate-x-0 hover:translate-x-4 hover:bg-green-600 md:pe-10 md:ps-16"
      ><i class="pi pi-user"></i> About
    </RouterLink>
    <RouterLink
      to="/Work"
      id="workNav"
      class="cursor-pointer py-3 px-10 rounded-3xl self-center transition-all duration-300 ease-in-out translate-x-0 hover:translate-x-4 hover:bg-green-600 md:pe-10 md:ps-16"
    >
      <i class="pi pi-briefcase"></i> Work
    </RouterLink>
  </div>
</template>

<style scoped></style>
