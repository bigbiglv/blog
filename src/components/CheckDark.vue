<script setup lang="ts">
import themeStore from '@/store/themeStore'
import { storeToRefs } from 'pinia';
const storeTheme = themeStore()
const { isDark } = storeToRefs(storeTheme)

</script>

<template>
  <div @click="storeTheme.DarkTheme(!isDark)" class="cursor-pointer select-none">
    {{isDark ? 'Dark' : 'Light'}}
  </div>
</template>