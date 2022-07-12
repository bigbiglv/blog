<script setup lang="ts">
import appStore from '@/store/appStore'
import { storeToRefs } from 'pinia';
import MList from './MList.vue'
import { useRouter } from 'vue-router';
import { ref } from 'vue';
const router = useRouter()
const routes = ref(router.options.routes)

const storeApp = appStore()
const { lgMenu, lg } = storeToRefs(storeApp)
</script>

<template>
<div 
  class="lg:w-44 transition-all transition-200 "
  :class="[lgMenu && lg ? 'w-full h-full fixed top-0 left-0 z-100':'w-0 ']"
  >
  <MList :routes="routes"/>
</div>
</template>


<style scoped>

</style>