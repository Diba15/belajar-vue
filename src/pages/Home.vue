<script setup>
import { VTypical } from 'vue-typical'
import MainButton from '@/components/Button.vue'

defineOptions({
  name: 'HomeMe',
})

const section = document.querySelectorAll('section')
const navLink = document.querySelectorAll('div a')

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY
    let offset = sec.offsetTop - 150
    let height = sec.offsetHeight
    let id = sec.getAttribute('id')

    if (top >= offset && top < offset + height) {
      navLink.forEach((links) => {
        links.classList.remove('active')
        document.querySelector('header nav a[href=' + id + ']').classList.add('active')
      })
    }
  })
}
</script>

<template>
  <section
    id="Home"
    class="py-5 flex flex-col min-h-screen gap-5 max-w-screen-md mx-auto px-5 text-white"
  >
    <v-typical
      class="blink text-center text-5xl font-bold border-y rounded-xl py-5 neue"
      :steps="[
        'I am',
        1000,
        'I am Dimas Bagas Saputro ',
        3000,
        `I am a Frontend Developer ${'👨‍💻'}`,
        1000,
      ]"
      :loop="Infinity"
      :wrapper="'h2'"
    ></v-typical>
    <h5 class="text-center neue text-xl">
      I have a passion for creating
      <span class="font-bold text-green-600">beautiful and functional</span> websites. I am also
      interested in learning new
      <span class="font-bold text-green-600">technologies and frameworks</span>. I am always looking
      for new challenges and opportunities to <span class="font-bold text-green-600">learn and grow</span>.
    </h5>
  </section>
  <section
    id="About"
    class="py-5 flex flex-col min-h-screen gap-5 max-w-screen-md mx-auto px-5 text-white"
  >
    <h1 class="font-bold text-center text-3xl">About</h1>
    <MainButton button-name="Hello" />
  </section>
  <section
    id="Work"
    class="py-5 flex flex-col min-h-screen gap-5 max-w-screen-md mx-auto px-5 text-white"
  >
    <h1 class="font-bold text-center text-3xl">Work</h1>
    <MainButton button-name="Click Work" />
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.neue {
  font-family: 'Bebas Neue', cursive;
}

.blink::after {
  content: '|';
  animation: blink 1s infinite step-start;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
