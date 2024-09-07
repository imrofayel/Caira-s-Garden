// stores/flowerBucketStore.ts
import { defineStore } from 'pinia'

import type { Flower } from '~/types/flower' // Note the 'type' keyword here

export const useFlowerBucketStore = defineStore('flowerBucket', {
  state: () => ({
    flowers: [] as Flower[]
  }),
  actions: {
    addFlower(flower: Flower) {
      this.flowers.push(flower)
    },
    removeFlower(flowerId: number) {
      const index = this.flowers.findIndex(f => f.id === flowerId)
      if (index !== -1) {
        this.flowers.splice(index, 1)
      }
    },
    clearBucket() {
      this.flowers = []
    }
  },
  getters: {
    bucketCount: (state) => state.flowers.length,
    totalPrice: (state) => state.flowers.reduce((sum, flower) => sum + flower.price, 0)
  }
})