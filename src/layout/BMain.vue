<script setup lang="ts">
import GoTop from '@/components/GoTop.vue'

</script>

<template>
  <div class="py-5 overflow-y-auto" id="appMain">
    <router-view>
      <template #default="{ Component, route }">
        <component :is="Component" :key="route.fullPath"/>
      </template>
    </router-view>
    <GoTop />

  </div>
</template>


<style scoped>
</style>