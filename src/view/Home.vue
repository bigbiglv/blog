<script setup lang="ts">
import codeTheme from '../store/codeTheme';
const store = codeTheme()
</script>

<template>
<h1 @click="store.cheangeTheme()">
  我是home
</h1>
</template>


<style lang="scss" scoped>

</style>