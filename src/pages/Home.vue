<script setup>
import { VTypical } from 'vue-typical'
import vue from '../assets/Icon/vue.png'
import react from '../assets/Icon/react.png'
import tailwind from '../assets/Icon/tailwind.svg'
import bootstrap from '../assets/Icon/bootstrap.png'
import next from '../assets/Icon/next.png'

defineOptions({
  name: 'HomeMe',
})

const skills = [
  {
    name: 'Vue',
    icon: vue,
  },
  {
    name: 'React',
    icon: react,
  },
  {
    name: 'Next',
    icon: next,
  },
  {
    name: 'Tailwind',
    icon: tailwind,
  },
  {
    name: 'Bootstrap',
    icon: bootstrap,
  }
]
</script>

<template>
  <section id="home" class="py-5 flex flex-col min-h-96 justify-center gap-5 max-w-full mx-auto my-10 text-white">
    <div class="max-w-screen-md mx-auto">
      <div class="relative inline-block px-16 py-4 text-center mx-auto w-full my-5">
        <!-- Left Border -->
        <div class="absolute left-0 top-0 h-full w-8">
          <div class="absolute left-0 top-0 h-1/3 w-[2px] bg-white"></div>
          <div class="absolute left-0 top-0 h-[2px] w-8 bg-white"></div>
        </div>

        <!-- Right Border -->
        <div class="absolute right-0 top-0 h-full w-8">
          <div class="absolute right-0 bottom-0 h-1/3 w-[2px] bg-white"></div>
          <div class="absolute right-0 bottom-0 h-[2px] w-8 bg-white"></div>
        </div>

        <v-typical
          class="blink text-center text-2xl md:text-5xl font-bold rounded-xl py-5 neue"
          :steps="[
          'I am',
          1000,
          'I am Dimas Bagas Saputro ',
          3000,
          `I am a Frontend Developer 👨‍💻`,
          1000,
        ]"
          :loop="Infinity"
          :wrapper="'h2'"
        ></v-typical>
      </div>
      <h5 class="text-center neue text-xl">
        I have a passion for creating
        <span class="font-bold text-green-600 hover:text-3xl transition-all duration-300">beautiful and functional</span> websites.
        <br> I am also
        interested in learning new
        <span class="font-bold text-green-600 hover:text-3xl transition-all duration-300">technologies and frameworks</span>.
        <br> I am always
        looking for new challenges and opportunities to
        <span class="font-bold text-green-600 hover:text-3xl transition-all duration-300">learn and grow</span>.
      </h5>
    </div>

    <div class="max-w-screen-md mx-auto mt-10">
      <div class="relative inline-flex items-center gap-8 px-12">
        <!-- Left bracket -->
<!--        <div class="absolute left-0 top-0 bottom-0 flex flex-col items-start">-->
<!--          <div class="w-5 h-[2px] bg-white"></div>-->
<!--          <div class="w-[2px] h-full bg-white"></div>-->
<!--          <div class="w-5 h-[2px] bg-white"></div>-->
<!--        </div>-->

        <!-- Programming languages/frameworks -->
        <div class="flex flex-wrap justify-center gap-10">
          <div
            v-for="skill in skills"
            :key="skill.name"
            class="flex flex-col items-center gap-2 grayscale hover:grayscale-0 hover:scale-[1.2] transition-all duration-300 neumorphishm"
          >
            <img :src="skill.icon" alt="" class="h-14 w-14" />
          </div>
        </div>

        <!-- Right bracket -->
<!--        <div class="absolute right-0 top-0 bottom-0 flex flex-col items-end">-->
<!--          <div class="w-5 h-[2px] bg-white"></div>-->
<!--          <div class="w-[2px] h-full bg-white"></div>-->
<!--          <div class="w-5 h-[2px] bg-white"></div>-->
<!--        </div>-->
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.neue {
  font-family: 'Bebas Neue', cursive;
}

.neumorphishm {
  border-radius: 50px;
  padding:15px;
  background: linear-gradient(145deg, #1e1e20, #232327);
  box-shadow:  24px 24px 47px #1e1e21,
  -24px -24px 47px #242427;
}

.neumorphishm:hover {
  border-radius: 50px;
  padding: 15px;
  background: #212124;
  box-shadow:  16px 16px 32px #1e1e21,
  -16px -16px 32px #242427;
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
