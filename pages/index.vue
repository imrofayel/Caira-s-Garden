<template>
  <div class="space-y-4 h-full">
    <AppHero />
    
    <div class="flex px-10 space-x-4">

      <div v-for="flower in flowers" :key="flower.id">
        <div class="h-[325px] w-[200px] flex-col items-center justify-center rounded-xl bg-white/70 backdrop-blur-lg border border-teal-950/10 hover:scale-105 duration-500 ease-in-out">
          <div class="w-full h-[170px] relative justify-start flex flex-col items-center">
            <div class="flex w-full justify-end relative top-2 right-4 text-teal-800 opacity-90 absolute">
              <Icon
                name="hugeicons:favourite"
                size="24"
              />
            </div>
            <img :src="`/images/${flower.id}.png`" class="scale-110 w-full h-full object-contain rounded-t-xl" />
          </div>
          <div class="p-3 pb-1 w-full h-[155px] bg-[#c4f4fa30] rounded-b-xl flex-col z-10 space-y-2">
            <div class="text-3xl font-medium opacity-90">
              <span class="opacity-20">$</span>{{ flower.price }}
            </div>
            <div class="text-2xl playfair-italic pb-2 opacity-90">{{ flower.name }}</div>
            <div class="rounded-xl w-full h-10 text-lg text-white flex justify-center items-center z-10 bg-teal-950 hover:opacity-100 space-x-2 opacity-90">
              <Icon name="hugeicons:shopping-basket-add-01" size="22" />
              <span>Add to bucket</span>
            </div>
          </div>
        </div>
      </div>

      <div class="rounded-xl p-2 h-10 text-lg text-white flex justify-center items-center z-10 bg-teal-950 hover:opacity-100 space-x-2 opacity-90">
        <Icon name="lucide:arrow-right" size="22" />
      </div>

    </div>

    <div class="rounded-full bg-teal-200/20 backdrop-blur-xl w-[200px] h-[200px] flex items-center justify-center overflow-hidden">
  <img src="/assets/caira.png" class="object-cover w-full h-full">
</div>

  </div>
</template>

<script setup lang="ts">
import { data as flowers } from '~/data/data';
</script>