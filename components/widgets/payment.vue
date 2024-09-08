<template>
  
  <div class="bg-gradient-to-br from-teal-50 to-cyan-100/70 overflow-hidden max-w-md text-teal-950/90">
  <div class="backdrop-blur-xl bg-white/80 p-6 rounded-xl border border-teal-950/10">
    <h2 class="text-2xl text-teal-900 mb-4 flex items-center space-x-2">
      <Icon name="hugeicons:shopping-basket-01" size="28"></Icon>
      <span>Payment Details</span>
    </h2>
    <p class="mb-5">Complete your purchase by proving details.</p>

    <form @submit.prevent="submitForm" class="space-y-3">
      <div class="relative">
        <label for="email" class="block my-2">Email</label>
        <input v-model="formData.email" type="email" id="email" 
               class="w-full px-4 py-2 border border-teal-950/10 rounded-2xl focus:ring-1 focus:ring-teal-600 focus:border-none placeholder:text-teal-800"
               placeholder="your@provier.com" required>
      </div>

      <div class="relative">
        <label for="card" class="block my-2">Card Number</label>
        <input v-model="formData.cardNumber" type="text" id="card" 
               class="w-full px-4 py-2 border border-teal-950/10 rounded-2xl focus:ring-1 focus:ring-teal-600 focus:border-none placeholder:text-teal-800"
               placeholder="0000 0000 0000 0000" required>
      </div>

      <div class="flex space-x-4 pt-2">
        <div class="flex-1">
          <label for="expiry" class="block my-2">Expiry Date</label>
          <input v-model="formData.expiry" type="text" id="expiry" 
                 class="w-full px-4 py-2 border border-teal-950/10 rounded-2xl focus:ring-1 focus:ring-teal-600 focus:border-none placeholder:text-teal-800"
                 placeholder="MM / YY" required>
        </div>
        
        <div class="flex-1">
          <label for="cvv" class="block my-2">CVV</label>
          <input v-model="formData.cvv" type="password" id="cvv" 
                 class="w-full px-4 py-2 border border-teal-950/10 rounded-2xl focus:ring-1 focus:ring-teal-600 focus:border-none placeholder:text-teal-800"
                 placeholder="123" required>
        </div>
      </div>

      <div class="relative pt-1">
        <label for="address" class="block my-2">Billing Address</label>
        <textarea v-model="formData.address" id="address" rows="2"
                  class="w-full px-4 py-2 border border-teal-950/10 rounded-2xl focus:ring-1 focus:ring-teal-600 focus:border-none placeholder:text-teal-800"
                  placeholder="Enter your billing address" required></textarea>
      </div>

      <div class="flex justify-between pt-2"><span>Price:</span><span>${{ totalPrice }}</span></div>

      <div class="flex justify-between pb-3"><span>Order Discount:</span><span>-${{ totalPrice * 0.40 }}</span></div>

      <button class="w-full" type="submit"><div class="w-full bg-teal-950 hover:bg-teal-900 text-white py-3 px-4 rounded-2xl hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition duration-500 ease-in-out space-x-2 flex items-center justify-center cursor-pointer">
        
      <span>Pay ${{ totalPrice - (totalPrice * 0.40) }}</span>

      <Icon name="lucide:arrow-right" size="21"></Icon>

      </div></button>

    </form>

    <div class="flex items-center text-base mt-4 text-center space-x-2">
      <Icon name="hugeicons:security" size="21"></Icon>
      <span>Secure and encrypted payment.</span>
    </div>
  </div></div>
</template>

<script setup>
import { reactive } from 'vue'

const emit = defineEmits(['form-submitted'])

const formData = reactive({
  email: '',
  cardNumber: '',
  expiry: '',
  cvv: '',
  address: ''
})

const submitForm = () => {
  console.log('Form submitted', formData)
  emit('form-submitted', { ...formData })
}

import { useFlowerBucketStore } from '~/stores/flowerBucketStore';
import { storeToRefs } from 'pinia';

definePageMeta({
  layout: 'checkout'
})

const flowerBucketStore = useFlowerBucketStore();
const { totalPrice } = storeToRefs(flowerBucketStore);

</script>