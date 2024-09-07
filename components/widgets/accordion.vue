<script setup lang="ts">

const items = [
  {
    label: 'What types of flowers do you offer?',
    content: 'We offer a wide variety of fresh flowers, including roses, lilies, tulips, orchids, sunflowers, and seasonal blooms. Whether you’re looking for a classic bouquet or something more unique, we have a range of options to suit every occasion.'
  },
  {
    label: 'Features & Quick Tips',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
  },
];

</script>

<template>
    <UAccordion :items="items" :ui="{ wrapper: 'flex flex-col w-full bg-transparent hover:bg-transparent',
      item: {
        size: 'text-[19px]',
        color: 'text-teal-950 opacity-90',
        padding: 'pt-3 pb-4 pl-4',
        icon: 'ms-auto transform transition-transform duration-200',
      },
    }" class="p-[150px] py-[50px] space-y-3">
      <template #default="{ item, open }">
        <UButton color="gray" variant="ghost" class="bg-transparent hover:bg-transparent flex justify-between" :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }">
          <span class="font-normal text-[26px] playfair-italic text-teal-950 opacity-90">{{ item.label }}</span>
          <template #trailing>
            <Icon 
              :name="open ? 'hugeicons:arrow-down-01' : 'hugeicons:arrow-right-01'" 
              size="28" 
              class="text-teal-950 opacity-90 transform transition-transform duration-[800ms] ease-in-out" 
              :class="{ 'rotate-180': open }"
            />
          </template>
        </UButton>
      </template>
    </UAccordion>
  </template>
  
  