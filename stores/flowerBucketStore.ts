// stores/flowerBucketStore.ts
import { defineStore } from 'pinia'

import type { Flower } from '~/types/flower' // Note the 'type' keyword here

export const useFlowerBucketStore = defineStore('flowerBucket', {
  state: () => ({
    flowers: [] as Flower[]
  }),
  actions: {
    addFlower(flower: Flower) {
      if (!this.isFlowerInBucket(flower.id)) {
        this.flowers.push(flower)

        return true // Indicate that the flower was added
      }
      return false // Indicate that the flower was not added (already exists)
    },

    addAgain(flower: Flower){
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
    totalPrice: (state) => state.flowers.reduce((sum, flower) => sum + flower.price, 0),
    isFlowerInBucket: (state) => (flowerId: number) => state.flowers.some(f => f.id === flowerId)
  }
})
