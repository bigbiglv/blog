<script setup lang="ts">
import BMain from './BMain.vue'
import BMenu from './BMenu/index.vue'
import BHeader from './BHeader.vue'

</script>

<template>
  <div class="layout h-screen overflow-hidden flex flex-col bg-white dark:bg-gray-800 transition">
    <BHeader />
    <div class="layout-main w-full h-full overflow-y-auto box-border flex">
      <BMenu />
      <BMain />
    </div>
  </div>
</template>

<style scoped>
.layout{
  width: 1000px;
  margin: 0 auto;
}
</style>