<script setup>
defineOptions({
  name: 'AboutMe',
})

const workExperience = [
  {
    title: 'Frontend Developer',
    company: 'SIMBARRAYA',
    duration: 'Oktober 2023 - February 2024',
  },
  {
    title: 'Technical Writer',
    company: 'BPH MIGAS',
    duration: 'Oktober 2021 - Oktober 2022',
  },
]

const education = [
  {
    title: 'Bachelor of Informatics Engineering',
    company: 'Telkom University',
    duration: '2022 - 2024',
  },
  {
    title: 'Diploma of Informatics Engineering',
    company: 'Telkom University',
    duration: '2019 - 2022',
  },
]
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
    class="animate-showFromTop flex flex-col min-h-fit my-20 gap-10 max-w-screen-md mx-auto items-center md:items-start justify-center text-white"
  >
    <div class="">
      <h1 class="font-bold text-3xl">Work Experience</h1>
      <h1></h1>
    </div>
    <div
      class="flex flex-row gap-10 justify-between w-full"
      v-for="work in workExperience"
      v-bind:key="work.title - work.company"
    >
      <div>
        <img class="rounded-full w-20 h-20" src="@/assets/logo.svg" alt="" />
      </div>
      <div class="grow">
        <span class="font-bold text-md">{{ work.company }}</span> <br />
        <span class="font-semibold text-sm">{{ work.title }}</span>
      </div>
      <h6 class="text-gray-300">{{ work.duration }}</h6>
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
      class="flex flex-row gap-10 justify-between w-full mx-10 md:mx-0"
      v-for="edu in education"
      v-bind:key="edu.title - edu.company"
    >
      <div>
        <img class="w-20 h-20" src="@/assets/tel_u_logo.png" alt="" />
      </div>
      <div class="grow">
        <span class="font-bold text-md">{{ edu.company }}</span> <br />
        <span class="font-semibold text-sm">{{ edu.title }}</span>
      </div>
      <h6 class="text-gray-300">{{ edu.duration }}</h6>
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
