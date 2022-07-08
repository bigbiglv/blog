<script setup lang="ts">
import { onMounted, watch, ref, computed } from 'vue'
const scrollTop = ref(0)
onMounted(()=>{
  const appMain = document.querySelector('#appMain')
  appMain?.addEventListener('scroll',(el)=>{
   scrollTop.value = (el.target as HTMLElement)?.scrollTop;
  })
})
const isShow = computed(()=>{
  return scrollTop.value > 50
})
function goTop(){
  //带动画的返回顶部
  const appMain = document.querySelector('#appMain')
  console.log(appMain?.scrollTop)
  appMain?.scrollTo({
    behavior: 'smooth',
    top: 0
  })
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
    v-if="isShow"
  >
    TOP
  </div>
</template>