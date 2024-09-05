<template>
  <div class="flex justify-between items-center p-8 text-lg">

    <div class="apparel text-4xl">Caira</div>

    <div class="flex justify-normal items-center space-x-8 opacity-85"><div v-for="(link, index) in links" :key="index">
      <NuxtLink :to="link.link"><Icon :name="link.icon" size="24"</Icon></NuxtLink>
    </div><img src="/assets/avatar.svg" width="42"/></div>



  </div>
</template>

<script lang="ts" setup>

const links = [
  {icon: 'hugeicons:search-01', link: '/'}, {icon: 'hugeicons:shopping-basket-01', link: '/'},
]

</script>

<style>

</style>