<script setup>
defineOptions({
  name: 'AboutMe',
})
</script>

<template>
  <div
    class="flex flex-col-reverse md:flex-row flex-shrink min-h-screen gap-10 md:gap-48 max-w-screen-2xl mx-auto items-center md:items-stretch justify-center dark:text-white"
  >
    <div class="max-h-fit">
      <h1 class="font-bold text-3xl">Dimas Bagas Saputro</h1>
      <h3 class="font-bold text-2xl text-green-600">Frontend Developer</h3>
      <p class="mt-5 max-w-72">
        Greetings, my name is <span class="text-green-600">Dimas Bagas Saputro</span>, and I hold a Bachelor’s degree in Informatics
        Engineering from Telkom University. I possess a keen interest and am presently dedicating my
        efforts towards the domains of <span class="text-green-600">Frontend Web Development</span> and <span class="text-green-600">Backend Web Development</span>.
      </p>
    </div>
    <div class="max-h-fit">
      <img src="@/assets/Dimas.png" alt="Illustration Coffee" class="img" />
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
</style>
