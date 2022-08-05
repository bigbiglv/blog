<script setup lang="ts">
import BMain from './BMain/index.vue'
import BMenu from './BMenu/index.vue'
import BHeader from './BHeader.vue'

</script>

<template>
<div class="flex justify-center bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100">
  <div class="w-full lg:w-[990px] 2xl:w-[1190px] h-screen flex flex-col">
    <BHeader />
    <div class="w-full h-full overflow-y-auto box-border flex ">
      <BMenu />
      <BMain />
    </div>
  </div>
</div>
</template>