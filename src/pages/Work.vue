<script setup>
import CustomCard from '@/components/CustomCard.vue'
import porto from '@/assets/images/porto.png'
import petani from '@/assets/images/petani_pintar.png'

defineOptions({
  name: 'WorkPage',
})

const portos = [
  {
    title: 'Diba Portfolio',
    description: 'My personal portfolio website.',
    image: porto,
    link: "https://diba-portfolio.vercel.app/",
    subjects: [
      'Vue',
      'Express',
      'MongoDB',
      'Tailwind',
    ]
  },
  {
    title: 'Petani Pintar',
    description:
      'Apps that help Indonesian farmers to grow their crops more efficiently and effectively.',
    image: petani,
    link: "https://petani-pintar-diba.vercel.app/",
    subjects: [
      'Next.js',
      'Tailwind',
    ]
  },
]
</script>

<template>
  <div class="py-5 flex flex-col gap-5 min-h-fit max-w-screen-md mx-auto px-5 my-5 text-white">
    <h1 class="font-bold text-center text-3xl">Portfolio</h1>
    <CustomCard
      v-for="porto in portos"
      v-bind:key="porto.title"
      :title="porto.title"
      :description="porto.description"
      :image="porto.image"
      :subjects="porto.subjects"
    />
  </div>
</template>

<style scoped></style>
