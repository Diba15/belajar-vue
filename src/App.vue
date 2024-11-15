<script setup>
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import NotFound from './pages/NotFound.vue'
import { computed, ref } from 'vue'
import AppMenus from '@/components/AppMenus.vue'

const routes = {
  '/': Home,
  '/About': About,
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
  <div class="bg-[#212124]">
    <custom-navbar />
    <AppMenus class="sticky top-0 max-w-fit md:w-full mx-auto text-white font-bold md:mx-0 md:-ms-10 md:top-1/2"/>
    <component class="min-h-dvh text-white" :is="currentView" />
    <custom-footer />
  </div>
</template>

<style scoped></style>
