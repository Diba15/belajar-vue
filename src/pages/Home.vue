<script setup>
import { VTypical } from 'vue-typical'

defineOptions({
  name: 'HomeMe',
})
</script>

<template>
  <section
    id="home"
    class="py-5 flex flex-col min-h-screen gap-5 max-w-full mx-auto px-5 text-white"
  >
    <div class="max-w-screen-md mx-auto">
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
        <span class="font-bold text-green-600">technologies and frameworks</span>. I am always
        looking for new challenges and opportunities to
        <span class="font-bold text-green-600">learn and grow</span>.
      </h5>
    </div>
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
