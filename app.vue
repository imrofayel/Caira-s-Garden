<template>

  <div class="p-10 block md:hidden h-sceen w-sceen text-3xl leading-relaxed text-white/90 bg-black">This site is under maintencne, and only be viewed using Desktop browser or desktop mode on mobile.


    <span class="block pt-20">Soon it will be updated so stay tuned.</span>
  </div>

  <div class="hidden md:block"><NuxtLayout>
    
    <NuxtPage/>
  </NuxtLayout></div>
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
