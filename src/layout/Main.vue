<script setup lang="ts">
</script>

<template>
  <router-view>
    <template #default="{ Component, route }">
      <component :is="Component" :key="route.fullPath"/>
    </template>
  </router-view>
</template>


<style scoped>

</style>