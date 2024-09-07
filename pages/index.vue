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
              <span class="opacity-20">$</span>{{ flower.price }}
            </div>
            <div class="text-[26px] playfair-italic pb-2 opacity-90">{{ flower.name }}</div>
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

    <WidgetsHeading/>
    <WidgetsReviews/>
    <WidgetsAccordion/>

    <UModal v-model="isModalOpen" :ui="{
        wrapper: 'relative z-50',
        inner: 'fixed inset-0 overflow-y-auto',
        container: 'flex min-h-full items-end sm:items-center justify-center text-center',
        padding: 'p-4 sm:p-0',
        margin: 'sm:my-8',
        base: 'relative text-left rtl:text-right flex flex-col',
        overlay: {
          base: 'fixed inset-0 transition-opacity',
          background: 'bg-gray-200/75 dark:bg-gray-800/75',
          transition: {
            enter: 'ease-out duration-300',
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
          enter: 'ease-out duration-300',
          enterFrom: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
          enterTo: 'opacity-100 translate-y-0 sm:scale-100',
          leave: 'ease-in duration-200',
          leaveFrom: 'opacity-100 translate-y-0 sm:scale-100',
          leaveTo: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
        },
      }">

      <div class="p-6 px-8 text-teal-950 opacity-90">

        <div class="flex justify-between"><h2 class="text-3xl playfair-italic mb-4">{{ selectedFlower?.name }}</h2><img :src="`/images/${selectedFlower?.id}.png`" width="120" class="absolute right-4 -top-12"></div>

        <div class="flex space-x-2"><div v-for="season in selectedFlower?.season">
          <div class="opacity-90 p-2 py-1 rounded-xl text-white/95 bg-[#f1fcfe] inline-block">{{ season }}</div></div>
        </div>

      </div>

    </UModal>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { data as flowers } from '~/data/data';

// Updated Flower interface to match the actual data structure
interface Flower {
  id: number;
  name: string;
  description: string;
  price: number;
  colors: string[];
  size: string;
  availability: string;
  category: string;
  occasion: string[];
  season: string[];
}

const isModalOpen = ref(false);
const selectedFlower = ref<Flower | null>(null);

const openModal = (flower: Flower) => {
  selectedFlower.value = flower;
  isModalOpen.value = true;
};

</script>