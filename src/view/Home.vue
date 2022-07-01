<script setup lang="ts">
import codeThemeStore from '@/store/codeThemeStore';
const storeCodeTheme = codeThemeStore()

</script>

<template>
<h1 @click="storeCodeTheme.cheangeTheme()">
  我是home
</h1>
<p @click="storeCodeTheme.cheangeTheme('vs2015')">切换</p>
</template>


<style lang="scss" scoped>

</style>