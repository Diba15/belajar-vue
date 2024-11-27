<script setup>
import { RouterView } from 'vue-router'
import BottomNavigation from '@/components/BottomNavigation.vue'
// import { Analytics } from '@vercel/analytics/vue';
</script>

<template>
<!--  <Analytics />-->
  <custom-navbar class="sticky top-0" />
  <div class="scroll-smooth animate-showFromTop px-5">
    <RouterView />
  </div>
  <BottomNavigation class="flex md:hidden" />
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
