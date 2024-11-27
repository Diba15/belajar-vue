<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  link: String,
  subjects: Array,
})
</script>

<template>
  <div
    class="flex flex-col-reverse mb-10 text-center items-center gap-3 md:gap-0 md:items-start md:text-start md:flex-row justify-between h-full"
  >
    <div class="flex flex-col justify-between gap-5 w-full">
      <div>
        <a v-bind:href="`${link}`" target="_blank" class="font-bold text-3xl text-green-600">{{
          title
        }}</a>
        <h1 class="font-semibold text-md">{{ description }}</h1>
        <div class="flex flex-wrap gap-2 my-2 justify-center md:justify-start">
          <div
            v-for="subject in subjects"
            v-bind:key="subject"
            class="bg-gray-800 rounded-full px-3 py-1 text-xs font-semibold"
          >
            {{ subject }}
          </div>
        </div>
      </div>
    </div>
    <img
      :src="`/src/assets/${image}`"
      alt="Petani Pintar"
      class="min-w-[50%] shadow-lg shadow-green-800 md:w-1/2 hover:scale-110 transition-all duration-300 ease-in-out"
    />
  </div>
</template>

<style scoped></style>
