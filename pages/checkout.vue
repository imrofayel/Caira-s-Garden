<template>
  <div class="flex flex-col px-20 text-lg">

    <div class="text-6xl playfair-italic opacity-90">Your Bucket</div>

    <div class="flex flex-col py-6 space-y-6" v-if="!bucketCount">He</div>

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
    </div>

    <!-- Limit the width of this section -->
    <div class="flex">
      <div class="my-6 inline-block border border-teal-950/10 rounded-xl overflow-hidden max-w-md">

        <div class="flex flex-col space-y-3 p-4 px-6 backdrop-blur-xl bg-[#c4f4fa30]">
          <div class="flex items-center text-2xl space-x-2 opacity-90">
            <Icon name="hugeicons:shopping-basket-01" size="27"></Icon><span>Payment Details</span>
          </div>
          <div class="text-lg opacity-90">Complete your purchase by providing details.</div>
        </div>

        <div class="flex flex-col p-6 bg-white/70 w-full backdrop-blur-xl overflow-hidden">

          <form class="flex flex-col w-full space-y-4" onsubmit="return validateForm()">
            
            <!-- Email Field -->
            <div
              class="flex overflow-hidden justify-center items-center border border-teal-950/10 rounded-2xl bg-[#c4f4fa20] focus-within:ring-2 focus-within:ring-teal-500 w-full">
              <!-- Icon -->
              <span class="px-3 text-teal-900/90 relative top-1">
                <Icon name="hugeicons:mail-02" size="26"></Icon>
              </span>
              <!-- Email Input -->
              <input type="email" id="email" placeholder="Enter your email"
                class="py-3 px-1 bg-transparent placeholder:text-teal-900 w-full focus:outline-none" required>
            </div>


            <!-- Card Information Field -->
            <div
              class="flex overflow-hidden justify-center items-center border border-teal-950/10 rounded-2xl bg-[#c4f4fa20] focus-within:ring-2 focus-within:ring-teal-500 w-full">
              <!-- Icon -->
              <span class="px-3 text-teal-900/90 relative top-1">
                <Icon name="hugeicons:credit-card" size="26"></Icon>
              </span>
              <input type="text" id="card" placeholder="Card"
                class="py-3 px-1 bg-transparent placeholder:text-teal-900 w-full focus:outline-none" required>
            </div>

            <!-- Expiration Date and CVV -->
            <div class="flex space-x-4">
              
              <div
              class="flex overflow-hidden justify-center items-center border border-teal-950/10 rounded-2xl bg-[#c4f4fa20] focus-within:ring-2 focus-within:ring-teal-500 w-full">
              <!-- Icon -->
              <span class="px-3 text-teal-900/90 relative top-1">
                <Icon name="hugeicons:credit-card" size="26"></Icon>
              </span>
              <input type="text" id="card" placeholder="Card"
                class="py-3 px-1 bg-transparent placeholder:text-teal-900 w-full focus:outline-none" required>
            </div>

              <div class="flex flex-col w-1/2">
                <label for="cvv" class="text-teal-800 font-semibold mb-2">CVV</label>
                <input type="text" id="cvv" placeholder="CVV"
                  class="p-3 border border-teal-800/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required>
              </div>
            </div>

            <!-- Address Field -->
            <div class="flex flex-col">
              <label for="address" class="text-teal-800 font-semibold mb-2">Billing Address</label>
              <input type="text" id="address" placeholder="Enter your address"
                class="p-3 border border-teal-800/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required>
            </div>

            <!-- Submit Button -->
            <button type="submit"
              class="p-3 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-300">Submit
              Payment</button>
          </form>
        </div>

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