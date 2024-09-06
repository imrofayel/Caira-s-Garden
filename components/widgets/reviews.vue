<template>

  <div v-for="(review, index) in reviews" :key="index" class="flex px-10">

    <div class="text-xl flex flex-col w-[260px] bg-[#c4f4fa40] rounded-xl backdrop-blur-xl border border border-teal-950/10 space-y-4">

      <div class="leading-relaxed text-xl bg-white/60 p-6 opacity-80">{{ review.review.toLocaleLowerCase() }}</div>

      <img src="/assets/flowers/01.svg" width="60" class="absolute top-[120px] left-[180px]">

      <div class="flex flex-col p-6 py-2 pb-6 opacity-90">

        <div class="playfair-italic text-2xl">{{ review.name }}</div>

        <div class="text-lg">{{ review.profession }}</div>
      </div>

    </div>
    
  </div>

</template>

<script lang="ts" setup>

const reviews = [
  {
    name: "Samantha Green",
    profession: "Interior Designer",
    review: "The arrangements are always stunning, and the flowers stay fresh for days!",
    rating: 5
  },
  // {
  //   name: "Michael Thompson",
  //   profession: "Software Engineer",
  //   review: "Ordered a bouquet for my wife’s birthday, and it was absolutely perfect!",
  //   rating: 4.5
  // },
  // {
  //   name: "Emily Harris",
  //   profession: "Wedding Planner",
  //   review: "Their flowers are my top choice for weddings—elegant and perfectly arranged.",
  //   rating: 5
  // },
  // {
  //   name: "James Lee",
  //   profession: "Photographer",
  //   review: "Incredibly creative arrangements that add so much beauty to my photoshoots!",
  //   rating: 4.7
  // },
  // {
  //   name: "Sophia Patel",
  //   profession: "Marketing Specialist",
  //   review: "The shop never fails to impress with their quality and reliable delivery service.",
  //   rating: 5
  // }
];


</script>

<style>

</style>