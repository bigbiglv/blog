<script setup lang="ts">
import themeStore from '@/store/themeStore';
import appStore from '@/store/appStore';
console.log(appStore().lg)
const storeTheme = themeStore()
function test(){
  storeTheme.setAppTheme('app-pink')
}
</script>

<template>
<h1 @click="storeTheme.changeDarkTheme()">
  我是home
</h1>
<p @click="storeTheme.changeDarkTheme()">切换</p>
<div class="flex">
  <div>
    <div class="w-8 h-8 bg-red-50 "></div>
    <div class="w-8 h-8 bg-red-100 "></div>
    <div class="w-8 h-8 bg-red-200 "></div>
    <div class="w-8 h-8 bg-red-300 "></div>
    <div class="w-8 h-8 bg-red-400 "></div>
    <div class="w-8 h-8 bg-red-500 "></div>
    <div class="w-8 h-8 bg-red-600 "></div>
    <div class="w-8 h-8 bg-red-700 "></div>
    <div class="w-8 h-8 bg-red-800 "></div>
    <div class="w-8 h-8 bg-red-900 "></div>
  </div>
  <div>
    <div class="w-8 h-8 bg-cyan-50 "></div>
    <div class="w-8 h-8 bg-cyan-100 "></div>
    <div class="w-8 h-8 bg-cyan-200 "></div>
    <div class="w-8 h-8 bg-cyan-300 "></div>
    <div class="w-8 h-8 bg-cyan-400 "></div>
    <div class="w-8 h-8 bg-cyan-500 "></div>
    <div class="w-8 h-8 bg-cyan-600 "></div>
    <div class="w-8 h-8 bg-cyan-700 "></div>
    <div class="w-8 h-8 bg-cyan-800 "></div>
    <div class="w-8 h-8 bg-cyan-900 "></div>
  </div>
  <div>
    <div class="w-8 h-8 bg-orange-50 "></div>
    <div class="w-8 h-8 bg-orange-100 "></div>
    <div class="w-8 h-8 bg-orange-200 "></div>
    <div class="w-8 h-8 bg-orange-300 "></div>
    <div class="w-8 h-8 bg-orange-400 "></div>
    <div class="w-8 h-8 bg-orange-500 "></div>
    <div class="w-8 h-8 bg-orange-600 "></div>
    <div class="w-8 h-8 bg-orange-700 "></div>
    <div class="w-8 h-8 bg-orange-800 "></div>
    <div class="w-8 h-8 bg-orange-900 "></div>
  </div>
  <div>
    <div class="w-8 h-8 bg-amber-50 "></div>
    <div class="w-8 h-8 bg-amber-100 "></div>
    <div class="w-8 h-8 bg-amber-200 "></div>
    <div class="w-8 h-8 bg-amber-300 "></div>
    <div class="w-8 h-8 bg-amber-400 "></div>
    <div class="w-8 h-8 bg-amber-500 "></div>
    <div class="w-8 h-8 bg-amber-600 "></div>
    <div class="w-8 h-8 bg-amber-700 "></div>
    <div class="w-8 h-8 bg-amber-800 "></div>
    <div class="w-8 h-8 bg-amber-900 "></div>
  </div>
  <div>
    <div class="w-8 h-8 bg-lime-50 "></div>
    <div class="w-8 h-8 bg-lime-100 "></div>
    <div class="w-8 h-8 bg-lime-200 "></div>
    <div class="w-8 h-8 bg-lime-300 "></div>
    <div class="w-8 h-8 bg-lime-400 "></div>
    <div class="w-8 h-8 bg-lime-500 "></div>
    <div class="w-8 h-8 bg-lime-600 "></div>
    <div class="w-8 h-8 bg-lime-700 "></div>
    <div class="w-8 h-8 bg-lime-800 "></div>
    <div class="w-8 h-8 bg-lime-900 "></div>
  </div>
  <div>
    <div class="w-8 h-8 bg-theme-lighter "></div>
    <div class="w-8 h-8 bg-theme-light "></div>
    <div class="w-8 h-8 bg-theme-default "></div>
    <div class="w-8 h-8 bg-theme-dark "></div>
    <div class="w-8 h-8 bg-theme-darker "></div>
  </div>
  <div @click="test">
    pink
  </div> 
</div>
</template>