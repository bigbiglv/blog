<script setup lang="ts">
import appStore from '@/store/appStore';
import useBlogTitle from '@/hooks/useBlogTitle';
const { title } = useBlogTitle()

const props = defineProps({
  shrink:{
    type: Boolean,
    default: false
  }
})

const storeApp = appStore();
</script>

<template>
<div 
  class="bg-theme-default w-full 
         transition-200 transition-all sticky top-0 flex items-center" 
  :class="[props.shrink ? 'h-5':'h-10']"
  @click="storeApp.openMenu"
>
  <h2 class="m-0 transition-200 transition-all" :class="[props.shrink ? 'text-sm':'text-xl']">
    {{title}}
  </h2> 
</div>
</template>
