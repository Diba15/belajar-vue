<script setup>
defineOptions({
  name: 'customFooter',
})

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

</script>

<template>
  <div @click="scrollTop"
    class="rounded-full z-50 bg-[#212124] border-2 text-center w-fit p-2 scale-110 cursor-pointer mx-auto -mb-5"
  >
    <i class="pi pi-arrow-up text-xl text-white"></i>
  </div>
  <footer class="border-t-[0.5px] flex p-5 text-white align-middle justify-end">
    <div class="flex flex-row gap-5">
      <i
        class="pi pi-instagram text-2xl transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer"
      ></i>
      <i
        class="pi pi-github text-2xl transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer"
      ></i>
      <i
        class="pi pi-linkedin text-2xl transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer"
      ></i>
    </div>
  </footer>
</template>

<style scoped></style>
