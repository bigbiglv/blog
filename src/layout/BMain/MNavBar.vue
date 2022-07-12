<script setup lang="ts">
import { useRoute } from 'vue-router';
import { watch, ref } from 'vue';
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
</script>

<template>
<div 
  class="bg-theme-default w-full 
         transition-200 transition-all sticky top-0 flex items-center" 
  :class="[props.shrink ? 'h-5':'h-10']"
>
  <h2 class="m-0 transition-200 transition-all" :class="[props.shrink ? 'text-sm':'text-xl']">
    {{title}}
  </h2> 
</div>
</template>
