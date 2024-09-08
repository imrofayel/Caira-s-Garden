<template>
  <NuxtLayout>
    
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup>
import { onMounted } from 'vue'
import { useColorMode } from '@vueuse/core'

const mode = useColorMode() // Ref<'dark' | 'light'>

onMounted(() => {
  mode.value = 'light' // Set the theme to light mode
})
</script>

<style>
body {
  background-color: #0f766e;
}
</style>
