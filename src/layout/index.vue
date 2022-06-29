<script setup lang="ts">
import BMain from './BMain.vue'
import BMenu from './BMenu.vue'
import BHeader from './BHeader.vue'
</script>

<template>
  <div class="w-screen h-screen overflow-hidden fixed top-0 left-0 flex bg-white dark:bg-gray-800 transition">
    <BMenu />
    <div class="overflow-y-auto flex-1">
      <BHeader />
      <BMain />
    </div>
  </div>
</template>


<style scoped>

</style>