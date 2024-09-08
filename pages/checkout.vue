<template>
  <div class="flex flex-col px-20 text-lg">
    <div class="text-6xl playfair-italic opacity-90">Your Bucket</div>

    <div class="flex flex-col py-10">

      <div v-if="!bucketCount">Hello</div>

        <div class="flex space-x-4">

      <div v-for="flower in bucketFlowers" :key="flower.id">
        <div
          class="h-[335px] w-[200px] flex-col items-center justify-center rounded-xl bg-white/70 backdrop-blur-lg border border-teal-950/10 hover:scale-105 duration-500 ease-in-out cursor-pointer"
        >
          <div class="w-full h-[170px] relative justify-start flex flex-col items-center">
            <div class="flex w-full justify-end relative top-3 right-4 text-teal-800 opacity-95 absolute">
              <Icon
                name="hugeicons:delete-01"
                size="24"
              />
            </div>
            <img :src="`/images/${flower.id}.png`" class="scale-110 w-full h-full object-contain rounded-t-xl" />
          </div>
          <div class="p-3 pb-1 w-full h-[165px] bg-[#c4f4fa30] rounded-b-xl flex-col z-10 space-y-2">
            <div class="text-3xl font-medium opacity-90">
              <span class="opacity-20 inter-tight">$</span>{{ flower.price }}
            </div>
            <div class="text-[26px] playfair-italic pb-2 opacity-90">{{ flower.name }}</div>

            <div class="px-4 rounded-xl w-full h-10 text-lg text-white flex justify-between items-center z-10 bg-teal-950 hover:opacity-100 space-x-2 opacity-90">

              <Icon name="hugeicons:add-01" size="24"/>

              <span class="text-2xl">1</span>

              <Icon name="hugeicons:remove-01" size="24"/>

            </div>
          </div>
        </div>
      </div>    
    </div>

    <div class="text-4xl">{{ totalPrice }}</div>

        </div>
      </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue';
import { useFlowerBucketStore } from '~/stores/flowerBucketStore';
import { storeToRefs } from 'pinia';
import type { Flower } from '~/types/flower';

definePageMeta({
  layout: 'checkout'
})

const flowerBucketStore = useFlowerBucketStore();
const { bucketCount, totalPrice, flowers: bucketFlowers } = storeToRefs(flowerBucketStore);

const addSelectedFlower = (selectedFlower : Flower) => {
  if (selectedFlower) {

    if(flowerBucketStore.isFlowerInBucket(selectedFlower.id)){
      flowerBucketStore.removeFlower(selectedFlower.id)
    }
    else {
      flowerBucketStore.addFlower(selectedFlower);
    }
  }
};

</script>

<style>

</style>