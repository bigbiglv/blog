<script setup lang="ts">
import MList from './MList.vue'
import { useRouter } from 'vue-router';
import { ref } from 'vue';
const router = useRouter()
const routes = ref(router.options.routes)
</script>

<template>
<div class="w-44">
  <MList :routes="routes"/>

</div>
</template>


<style scoped>

</style>