<template>
  <div class="h-full w-full">
    <AppHero />
    
    <div class="flex px-10 space-x-4">
      <div v-for="flower in flowers" :key="flower.id">
        <div 
          class="h-[335px] w-[200px] flex-col items-center justify-center rounded-xl bg-white/70 backdrop-blur-lg border border-teal-950/10 hover:scale-105 duration-500 ease-in-out cursor-pointer"
          @click="openModal(flower)"
        >
          <div class="w-full h-[170px] relative justify-start flex flex-col items-center">
            <div class="flex w-full justify-end relative top-2 right-4 text-teal-800 opacity-90 absolute">
              <Icon
                name="hugeicons:favourite"
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
            <div class="rounded-xl w-full h-10 text-lg text-white flex justify-center items-center z-10 bg-teal-950 hover:opacity-100 space-x-2 opacity-90" :onclick="addSelectedFlower">
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

    <WidgetsHeading/>
    <WidgetsReviews/>
    
    <WidgetsAccordion class="opacity-95"/>

    <UModal v-model="isModalOpen" :ui="{
        overlay: {
          base: 'fixed inset-0 transition-opacity',
          background: 'bg-gray-200/75 backdrop-blur-lg dark:bg-gray-800/75',
          transition: {
            enter: 'ease-out duration-500',
            enterFrom: 'opacity-0',
            enterTo: 'opacity-100',
            leave: 'ease-in duration-200',
            leaveFrom: 'opacity-100',
            leaveTo: 'opacity-0',
          },
        },
        background: 'bg-white/80 backdrop-blur-xl dark:bg-gray-900',
        ring: '',
        rounded: 'rounded-xl',
        shadow: 'shadow-none',
        width: 'w-full sm:max-w-lg',
        height: '',
        fullscreen: 'w-screen h-screen',
        transition: {
          enter: 'ease-out duration-500',
          enterFrom: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
          enterTo: 'opacity-100 translate-y-0 sm:scale-100',
          leave: 'ease-in duration-200',
          leaveFrom: 'opacity-100 translate-y-0 sm:scale-100',
          leaveTo: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
        },
      }">

      <div class="p-6 px-8 text-teal-950 opacity-90">

        <div class="flex justify-between"><h2 class="text-[33px] playfair-italic mb-2 opacity-90">{{ selectedFlower?.name }}</h2><div class="absolute right-4 -top-12 h-[140px]"><img :src="`/images/${selectedFlower?.id}.png`" class=" scale-110 w-full h-full object-contain"></div></div>

        <div class="leading-relaxed text-lg opacity-90">{{ selectedFlower?.description }}</div>

        <div class="text-lg opacity-90 pt-3">
          <span class="leading-relaxed"><span class="opacity-20 text-xl">1. &ThinSpace;</span>Available specifically during the <u class="decoration-current">{{ selectedFlower?.season.join(', ').toLocaleLowerCase() }}</u> season.</span>
        </div>

        <div class="text-lg opacity-90 pt-3">
          <span class="leading-relaxed"><span class="opacity-20 text-xl">2. &ThinSpace;</span>Perfect for celebrating any special moment in life e.g., <u class="decoration-current">{{ selectedFlower?.occasion.join(', ').toLocaleLowerCase() }}</u> etc.</span>
        </div>

        <div class="text-lg opacity-90 pt-3">
          <span class="leading-relaxed"><span class="opacity-20 text-xl">3. &ThinSpace;</span>This bouquet is <u>{{ selectedFlower?.availability.toLocaleLowerCase() }}</u>.</span>
        </div>

        <div class="text-lg opacity-90 pt-5">
          <span class="leading-relaxed">This will be delivered by a local florist with a 7-day fresh guarantee, more details on checkout page.</span>
        </div>

        <div class="flex items-center justify-between pt-5"><div class="text-3xl font-medium opacity-90">
          <span class="opacity-20 inter-tight">$</span>{{ selectedFlower?.price }}
        </div>

        <div class="inline-block rounded-xl p-3 py-5 h-10 text-lg text-white flex justify-center items-center z-10 bg-teal-950 hover:scale-105 duration-300 ease-in-out space-x-2" :onclick="addSelectedFlower">
              <Icon name="hugeicons:shopping-basket-add-01" size="22" />
              <span>Add to bucket</span>
        </div></div>

      </div>

    </UModal>

  </div>
</template>

<script setup lang="ts">
import { data as flowers } from '~/data/data';
import { ref, computed } from 'vue';
import { useFlowerBucketStore } from '~/stores/flowerBucketStore';
import { storeToRefs } from 'pinia';
import type { Flower } from '~/types/flower';

const isModalOpen = ref(false);
const selectedFlower = ref<Flower | null>(null);

const flowerBucketStore = useFlowerBucketStore();
const { bucketCount, totalPrice, flowers: bucketFlowers } = storeToRefs(flowerBucketStore);

const openModal = (flower: Flower) => {
  selectedFlower.value = flower;
  isModalOpen.value = true;
};

const addSelectedFlower = () => {
  if (selectedFlower.value) {
    flowerBucketStore.addFlower(selectedFlower.value);
  }
};

const removeFlower = (flowerId: number) => {
  flowerBucketStore.removeFlower(flowerId);
};

const clearBucket = () => {
  flowerBucketStore.clearBucket();
};

</script>