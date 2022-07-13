<script setup lang="ts">
import SelectCodeThemeVue from '@/components/selectCodeTheme.vue'
import CheckDark from '@/components/CheckDark.vue'
import appStore from '@/store/appStore';
import { storeToRefs } from 'pinia';
const storeApp = appStore()
const { mobile } = storeToRefs(storeApp)
</script>

<template>
  <div class="h-20 w-full flex justify-between items-center px-5 lg:px-0 transition-200 transition-all">
    <div v-if="mobile" @click="storeApp.openMenu()">菜单</div>
    <!-- <SelectCodeThemeVue /> -->
    <CheckDark />
  </div>
</template>


<style lang="scss" scoped>

</style>