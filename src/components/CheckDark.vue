<script setup lang="ts">
import themeStore from '@/store/themeStore'
import { storeToRefs } from 'pinia';
import { LightBulbIcon, MoonIcon } from '@heroicons/vue/solid'

const storeTheme = themeStore()
const { isDark } = storeToRefs(storeTheme)

</script>

<template>
  <div class="cursor-pointer select-none">
    
    <n-switch :value="isDark" @click="storeTheme.DarkTheme(!isDark)">
      <template #checked>
        <LightBulbIcon class="h-5 w-5"/>
      </template>
      <template #unchecked>
        <MoonIcon class="h-5 w-5 -translate-y-px"/>
      </template>
    </n-switch>
  </div>
</template>