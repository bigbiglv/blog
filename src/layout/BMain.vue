<script setup lang="ts">
</script>

<template>
  <div class="">
    <router-view>
      <template #default="{ Component, route }">
      <component :is="Component" :key="route.fullPath"/>
    </template>
    </router-view>
  </div>
</template>


<style scoped>

</style>