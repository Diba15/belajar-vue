<script setup>
import StudentService from '@/services/model/Student.js'
import WorkService from '@/services/model/Work.js'
import { ref, onMounted } from 'vue'

defineOptions({
  name: 'AboutMe',
})

const workExperience = ref([])

onMounted(async () => {
  try {
    const response = await WorkService.getAll()
    workExperience.value = response.data[0]
    workExperience.value = response.data.flat()
  } catch (error) {
    console.error('Error fetching work experience:', error)
  }
})

const education = ref([])

onMounted(async () => {
  try {
    const response = await StudentService.getAll()
    education.value = response.data[0]
    education.value = response.data.flat()
  } catch (error) {
    console.error('Error fetching education:', error)
  }
})

console.log(education)
</script>

<template>
  <div
    class="animate-showFromTop flex flex-col-reverse min-h-fit md:flex-row gap-10 md:gap-48 max-w-screen-lg mx-auto items-center md:items-start justify-center text-white"
  >
    <div class="max-h-fit">
      <h1 class="font-bold text-3xl">Dimas Bagas Saputro</h1>
      <h3 class="font-bold text-2xl text-green-600">Frontend Developer</h3>
      <p class="mt-5 max-w-72">
        Greetings, my name is <span class="text-green-600">Dimas Bagas Saputro</span>, and I hold a
        Bachelor’s degree in Informatics Engineering from Telkom University. I possess a keen
        interest and am presently dedicating my efforts towards the domains of
        <span class="text-green-600">Frontend Web Development</span> and
        <span class="text-green-600">Backend Web Development</span>.
      </p>
    </div>
    <div class="max-h-fit">
      <img src="@/assets/Dimas.png" alt="Illustration Coffee" class="img" />
    </div>
  </div>

  <div
    class="animate-showFromTop flex flex-col min-h-fit my-20 gap-10 max-w-screen-md mx-auto items-center md:items-start justify-center align-middle text-white"
  >
    <div class="">
      <h1 class="font-bold text-3xl">Work Experience</h1>
      <h1></h1>
    </div>
    <div
      class="flex flex-col md:flex-row gap-3 md:gap-10 items-center justify-between w-fit mx-10 md:mx-0"
      v-for="work in workExperience"
      v-bind:key="work._id"
    >
      <div class="flex flex-row gap-5">
        <img class="w-20 h-20" src="@/assets/logo.svg" alt="" />
        <div class="grow">
          <span class="font-bold text-md">{{ work.company }}</span> <br />
          <span class="font-semibold text-sm">{{ work.title }}</span>
          <h6 class="text-gray-300">{{ work.duration }}</h6>
          <div class="flex flex-wrap gap-2">
            <div
              v-for="skill in work.skills"
              v-bind:key="skill"
              class="bg-gray-800 rounded-full px-3 py-1 text-xs font-semibold"
            >
              {{ skill }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="animate-showFromTop flex flex-col min-h-fit gap-10 mb-20 max-w-screen-md mx-auto items-center md:items-start justify-center text-white"
  >
    <div class="">
      <h1 class="font-bold text-3xl">Education</h1>
      <h1></h1>
    </div>
    <div
      class="flex flex-col md:flex-row gap-3 md:gap-10 justify-between items-center mx-10 md:mx-0"
      v-for="edu in education"
      v-bind:key="edu._id"
    >
      <div class="flex flex-row gap-5">
        <img class="w-20 h-20" src="@/assets/tel_u_logo.png" alt="" />
        <div class="grow">
          <span class="font-bold text-md">{{ edu.company }}</span> <br />
          <span class="font-semibold text-sm">{{ edu.title }}</span>
          <h6 class="text-gray-300 items-start">{{ edu.duration }}</h6>
          <div class="flex flex-wrap gap-2">
            <div
              v-for="subject in edu.subjects"
              v-bind:key="subject"
              class="bg-gray-800 rounded-full px-3 py-1 text-xs font-semibold"
            >
              {{ subject }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img {
  width: 300px;
  height: 300px;
  object-position: bottom;
  border-radius: 50%;
  object-fit: cover;
}

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
