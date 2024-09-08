<template>
  <div class="flex flex-col px-20 text-lg">

    <div class="text-6xl playfair-italic opacity-90">Your Bucket</div>

    <div class="flex text-xl flex-col py-6 space-y-6" v-if="!bucketCount"><div>Nothing is in your bucket, but you can add beautiful flowers in your bucket on this site.</div>
  
    <div class="p-10 flex text-5xl text-teal-800 items-center justify-center">
      <div class="text-[100px] playfair-italic opacity-10 text-right hover:opacity-90 duration-300 ease-in-out">In joy or sadness, flowers are our constant friends.
    </div><img src="/assets/flowers/02.svg" width="150" class="relative"></div>
  </div>

    <div class="flex flex-col py-6 space-y-6" v-if="bucketCount">

      <div class="text-xl">By placing your order, you agree to Caira's <u>Privacy</u> and <u>Policy</u>.</div>

      <div class="flex space-x-4">
        <div v-for="flower in bucketFlowers" :key="flower.id">
          <div
            class="h-[280px] w-[200px] flex-col items-center justify-center rounded-xl bg-white/70 backdrop-blur-lg border border-teal-950/10 hover:scale-105 duration-500 ease-in-out cursor-pointer">
            <div class="w-full h-[170px] relative justify-start flex flex-col items-center">
              <div class="flex w-full justify-end relative top-3 right-4 text-teal-800 opacity-95 absolute">
                <Icon name="hugeicons:delete-01" size="24" />
              </div>
              <img :src="`/images/${flower.id}.png`" class="scale-110 w-full h-full object-contain rounded-t-xl" />
            </div>
            <div class="p-3 pb-1 w-full h-[110px] bg-[#c4f4fa30] rounded-b-xl flex-col z-10 space-y-2">
              <div class="text-3xl font-medium opacity-90">
                <span class="opacity-20 inter-tight">$</span>{{ flower.price }}
              </div>
              <div class="text-[26px] playfair-italic pb-2 opacity-90">{{ flower.name }}</div>

            </div>
          </div>
        </div>
      </div>

      <WidgetsPayment/>

      <div>
This item will be delivered by a local florist. We provide a 7-day fresh flower guarantee. See <u>Delivery Details</u>

To guarantee the freshest bouquet possible, our florists may replace some stems in your arrangement which could differ in color and variety. See <u>Substitution Policy.</u>

</div>
      
    </div>

  </div>


</template>

<script lang="ts" setup>

import { useFlowerBucketStore } from '~/stores/flowerBucketStore';
import { storeToRefs } from 'pinia';

definePageMeta({
  layout: 'checkout'
})

const flowerBucketStore = useFlowerBucketStore();
const { bucketCount, totalPrice, flowers: bucketFlowers } = storeToRefs(flowerBucketStore);

</script>

<style></style>