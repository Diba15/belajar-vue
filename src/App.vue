<script setup>
import AppMenus from '@/components/AppMenus.vue'
import { RouterView } from 'vue-router'
import BottomNavigation from '@/components/BottomNavigation.vue'
</script>

<template>
  <custom-navbar class="sticky top-0" />
  <AppMenus
    class="fixed hidden md:flex top-0 max-w-fit md:w-full mx-auto text-white font-bold md:mx-0 md:-ms-10 md:top-1/3"
  />
  <div class="scroll-smooth">
    <RouterView class="animate-showFromTop px-5" />
    <BottomNavigation class="flex md:hidden" />
  </div>
</template>

<style scoped>
.animate-showFromTop {
  animation: showFromTop 2s ease-in-out;
}

@keyframes showFromTop {
  from {
    transform: translateY(-20%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
