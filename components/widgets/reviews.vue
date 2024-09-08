<template>

  <div class="flex sm:flex-row flex-col space-y-5 sm:space-y-0 px-10 sm:space-x-4 justify-end"><div v-for="(review, index) in reviews" :key="index">

    <div class="text-xl flex flex-col w-[260px] bg-white/50 rounded-xl backdrop-blur-xl border border border-teal-950/10 space-y-4 overflow-hidden hover:scale-105 duration-500 ease-in-out">

      <div class="p-6 flex justify-end">

        <div class="absolute top-2 right-3 opacity-10"><Icon name="lucide:arrow-up-right" size="24"></Icon></div>

        <div class="leading-relaxed text-[23px] opacity-80 inter-tight">{{ review.review }}</div></div>

      <img :src="`/flowers/${review.id}.svg`" :width="review.width ?? 60" class="z-10 absolute top-[145px] left-[180px]">

      <div class="flex flex-col space-y-1 p-6 py-2 pb-6 opacity-90 bg-[#f1fcfe]">

        <div class="playfair-italic text-[28px]">{{ review.name }}</div>

        <div class="text-lg">{{ review.profession }}</div>
      </div>

    </div>
    
  </div></div>

</template>

<script lang="ts" setup>

const reviews = [
  {
    id: '01',
    name: "Adam Rofayel",
    profession: "Interior Designer",
    review: "Incredibly creative arrangements that add much beauty to my photoshoots!",
  },
  {
    id: '03',
    name: "Emily Harris",
    profession: "Software Engineer",
    review: "Ordered a bouquet for my wife’s birthday, and it was absolutely perfect!",
    width: 70
  },
  {
    id: '04',
    name: "Hinta Hyuga",
    profession: "Wedding Planner",
    review: "Their flowers are my top choice for weddings—elegant and perfect.",
    width: 73
  },
];


</script>

<style>

</style>