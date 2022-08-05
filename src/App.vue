<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import themeStore from './store/themeStore.js';
const storeTheme = themeStore();
</script>

<template>
  <n-config-provider :theme="storeTheme.isDark ? darkTheme : ''">
    <router-view />
  </n-config-provider>
</template>

<style>
</style>
