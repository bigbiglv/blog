<script setup lang="ts">
import { useRoute } from 'vue-router';
import { watch, ref } from 'vue';
import appStore from '@/store/appStore';
const props = defineProps({
  shrink:{
    type: Boolean,
    default: false
  }
})
const route = useRoute();
const title = ref(route.meta.title);
watch(()=>route.meta.title,(val)=>{
  title.value = val;
});

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
