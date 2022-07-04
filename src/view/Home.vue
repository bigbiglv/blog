<script setup lang="ts">
import themeStore from '@/store/themeStore';
const storeTheme = themeStore()

</script>

<template>
<h1 @click="storeTheme.changeDarkTheme()">
  我是home
</h1>
<p @click="storeTheme.changeDarkTheme()">切换</p>
</template>


<style lang="scss" scoped>

</style>