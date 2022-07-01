<script setup lang="ts">
import themeStore from '@/store/themeStore'
const storeTheme = themeStore()

</script>

<template>
  <div @click="storeTheme.changeDarkTheme()">
    header
  </div>
</template>


<style lang="scss" scoped>

</style>