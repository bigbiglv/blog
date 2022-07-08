<script setup lang="ts">
import { useRoute } from 'vue-router';
import { watch, ref } from 'vue';
const route = useRoute();
const title = ref(route.meta.title);
watch(()=>route.meta.title,(val)=>{
  title.value = val;
});
</script>

<template>
  <h2>{{title}}</h2> 
</template>
