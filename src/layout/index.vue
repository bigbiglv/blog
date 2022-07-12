<script setup lang="ts">
import BMain from './BMain/index.vue'
import BMenu from './BMenu/index.vue'
import BHeader from './BHeader.vue'

</script>

<template>
<div class="flex justify-center bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100">
  <div class="layout h-screen overflow-hidden flex flex-col  transition">
    <BHeader />
    <div class="layout-main w-full h-full overflow-y-auto box-border flex">
      <BMenu />
      <BMain />
    </div>
  </div>
</div>
</template>

<style scoped>
.layout{
  width: 1000px;
}
</style>