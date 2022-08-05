<script setup lang="ts">
import themeStore from '@/store/themeStore'
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
const storeTheme = themeStore()
const { isDark } = storeToRefs(storeTheme)

</script>

<template>
  <div class="cursor-pointer select-none">
    <n-switch :value="isDark" @click="storeTheme.DarkTheme(!isDark)">
      <template #checked>
        🌙
      </template>
      <template #unchecked>
        ☀️
      </template>
    </n-switch>
  </div>
</template>