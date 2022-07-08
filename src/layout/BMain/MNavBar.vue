<script setup lang="ts">
import { useRoute } from 'vue-router';
import { watch, ref } from 'vue';
const props = defineProps({
  isFixed:{
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
<div class="bg-gray-50 w-full h-20 transition " :class="[props.isFixed ? 'sticky top-0 left-0':'']">
  <h2 class="m-0">{{title}}</h2> 
</div>
</template>
