<script setup>
defineOptions({
  name: 'MainButton',
})

defineProps({
  buttonName: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
    {{ buttonName }}
  </button>
</template>

<style scoped></style>
