<template>
  <div class="inset-0 -z-10 h-full w-full bg-[#fcfcfc] bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      
    <div class="h-full relative w-full text-teal-950 bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#d7f6fc,transparent)]">
    <AppCheckoutHeader/>
    <slot />
    <AppCheckoutFooter/>
  </div></div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>