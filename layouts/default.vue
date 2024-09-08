<template>

  <div class="text-lg h-9 w-full bg-teal-700 flex items-center justify-center text-white">
    <Icon name="lucide:party-popper" size="24"></Icon><span class="p-2">Get upto 40% off on first order.</span>
  </div>

  <div class="inset-0 -z-10 h-full w-full bg-[#fcfcfc] bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
    
    <!-- <div class="inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#fff0_70%,#d7f6fc_100%)]">  -->
      
    <div class="h-full relative w-full text-teal-950 bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#d7f6fc,transparent)]">
    <AppHeader/>
    <slot />
    <AppFooter/>
  </div></div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>