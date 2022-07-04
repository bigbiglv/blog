<script setup lang="ts">
import SelectCodeThemeVue from '@/components/selectCodeTheme.vue';
import { useRoute } from 'vue-router';
import { watch, ref } from 'vue';
const route = useRoute();
const title = ref(route.meta.title);
watch(()=>route.meta.title,(val)=>{
  title.value = val;
});
console.log(route.meta.title);
</script>

<template>
  <div class="h-20 w-full flex justify-between items-center ">
    <h2>{{title}}</h2> 
    <SelectCodeThemeVue />
  </div>
</template>


<style lang="scss" scoped>

</style>