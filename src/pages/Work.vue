<script setup>
import CustomCard from '@/components/CustomCard.vue'
import ProjectService from '@/services/model/Project.js'
import { onMounted, ref } from 'vue'

defineOptions({
  name: 'WorkPage',
})

const projects = ref([])

// fetch projects
onMounted(async () => {
  try {
    const response = await ProjectService.getAll()
    projects.value = response.data.flat()
  } catch (error) {
    console.error('Error fetching projects:', error)
  }
})

// const skills = computed(() => {
//   return new Set(projects.value.flatMap((project) => project.subjects))
// })
</script>

<template>
  <div
    class="py-5 flex flex-col gap-5 min-h-fit max-w-screen-xl mx-auto px-5 my-5 text-white"
  >
    <h1 class="font-bold text-3xl">Portfolio</h1>
    <hr>
    <div class="flex flex-col gap-5">
      <div v-if="projects.length > 0" class="flex flex-col gap-5">
        <CustomCard
          v-for="project in projects"
          v-bind:key="project.title"
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :subjects="project.subjects"
          :link="project.link"
          :githubLink="project.githubLink"
        />
        <p class="text-center text-sm text-gray-300 mb-10">Stay tuned for more updates!</p>
      </div>
      <div v-else class="flex items-center justify-center">
        <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-green-600"></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
