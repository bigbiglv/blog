<script setup lang="ts">
const porps = defineProps({
  isShow:{
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(['go'])
function goTop(){
  emits('go')
}
</script>

<template>
  <div 
    class="w-20 h-10 align-middle text-center 
          shadow-xl fixed bottom-10 right-10 rounded-sm 
          border-2 border-black cursor-pointer hover:animate-pulse
          bg-white dark:bg-gray-800" 
    @click="goTop" 
    title="蒸蒸日上"
    v-if="porps.isShow"
  >
    TOP
  </div>
</template>