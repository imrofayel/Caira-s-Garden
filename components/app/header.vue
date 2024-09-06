<template>
  <div class="flex justify-end items-center p-8 text-teal-800 text-lg space-x-6">

    <div class="flex justify-normal items-center space-x-8 opacity-85">

      <NuxtLink to="/" class="flex">
        <Icon name="hugeicons:favourite" size="30"></Icon>
      </NuxtLink>

    </div>

    <div class="flex justify-normal items-center space-x-8 opacity-85">

      <NuxtLink to="/" class="flex">
        <Icon name="hugeicons:shopping-basket-01" size="30"></Icon>
        <div class="w-6 h-6 text-white text-base items-center justify-center flex bg-teal-800 relative right-3 -top-1 rounded-full">{{ cart }}</div>
      </NuxtLink>

    </div>

  </div>
</template>

<script lang="ts" setup>

const cart = ref(6)

</script>

<style>

</style>