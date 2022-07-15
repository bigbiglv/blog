<script setup lang="ts">
import appStore from '@/store/appStore'
import { storeToRefs } from 'pinia';
import MList from './MList.vue'
import { useRouter } from 'vue-router';
import { ref } from 'vue';
const router = useRouter()
const routes = ref(router.options.routes)

const storeApp = appStore()
const { lgMenu, mobile } = storeToRefs(storeApp)
</script>

<template>
<div 
  class="lg:w-44 transition-all transition-200 rounded-lg pt-4 bg-gray-100 dark:bg-gray-800 lg:opacity-100"
  :class="[lgMenu && mobile ? 'w-full h-full fixed top-0 left-0 z-50 p-10 opacity-100':'w-0 opacity-0']"
  >
  <MList :routes="routes"/>
</div>
</template>


<style scoped>

</style>