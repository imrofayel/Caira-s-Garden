<script setup lang="ts">

const items = [
  {
    label: 'What types of flowers do you offer?',
    content: 'We offer a wide variety of fresh flowers, including roses, lilies, tulips, orchids, sunflowers, and seasonal blooms. Whether you’re looking for a classic bouquet or something more unique, we have a range of options to suit every occasion.'
  },
  {
    label: 'Can I customize my bouquet?',
    content: 'Absolutely! You can customize your bouquet by selecting your preferred flowers, colors, and arrangement style. If you have specific requests, feel free to contact us, and we’ll create a beautiful bouquet tailored to your preference.'
  },
  {
    label: 'Do you offer same day delivery?',
    content: 'Yes, we offer same-day delivery for orders placed before 2:00 PM. Our delivery services are available throughout the local area, ensuring that your flowers arrive fresh and on time for any special occasion.'
  },
];

</script>

<template>
    <UAccordion :items="items" :ui="{ wrapper: 'flex flex-col w-full bg-transparent hover:bg-transparent',
      item: {
        size: 'text-[20px]',
        color: 'text-teal-950 opacity-90',
        padding: 'pt-3 pb-4 pl-4 leading-loose',
        icon: 'ms-auto transform transition-transform duration-200',
      },
    }" class="px-[26px] sm:px-[150px] pt-[10px] pb-[40px] space-y-2">
      <template #default="{ item, open }">
        <UButton color="gray" variant="ghost" class="bg-transparent hover:bg-transparent flex justify-between" :ui="{ rounded: 'rounded-none', padding: { sm: 'p-4' } }">
          <span class="font-normal text-[25px] sm:text-[34px] playfair-italic text-left text-teal-950 opacity-90 hover:opacity-90 duration-300 ease-in-out leading-normal" :class="{ 'opacity-90': open }">{{ item.label }}</span>
          <template #trailing>
            <Icon 
              name="hugeicons:arrow-down-01" 
              class="text-teal-950 opacity-90 transform transition-transform duration-[800ms] ease-in-out size-[28px]" 
              :class="{ 'rotate-180': open }"
            />
          </template>
        </UButton>
      </template>
    </UAccordion>
  </template>
  
  