<script setup lang="ts">
import { ChevronDoubleUpIcon } from '@heroicons/vue/solid';
const { isShow = false } = defineProps<{isShow:boolean}>()
const emits = defineEmits(['go'])
function goTop(){
  emits('go')
}
</script>

<template>
  <div 
    class="w-14 h-14 flex items-center justify-center
          shadow-lg fixed bottom-10 right-10 rounded-full 
          cursor-pointer hover:animate-pulse hover:shadow-xl
          bg-gray-50 dark:bg-gray-600" 
    @click="goTop" 
    title="蒸蒸日上"
    v-if="isShow"
  >
    <ChevronDoubleUpIcon class="w-6 h-6" />
  </div>
</template>