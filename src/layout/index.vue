<script setup lang="ts">
import BMain from './BMain.vue'
import BMenu from './BMenu.vue'
import BHeader from './BHeader.vue'
</script>

<template>
  <div class="w-full h-full overflow-hidden flex  bg-white dark:bg-gray-800 transition">
    <BMenu />
    <div class="overflow-y-auto flex-1 box-border ">
      <BHeader />
      <BMain />
    </div>
  </div>
</template>


<style scoped>

</style>