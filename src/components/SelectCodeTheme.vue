<script setup lang="ts">
import themeStore from '../store/themeStore';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
const storeTheme = themeStore()
const { codeThemeList, defaultCodeTheme } = storeToRefs(storeTheme)
const select = ref<HTMLSelectElement>()
function changeCodeTheme(){
  let value = select.value?.value as string
  storeTheme.setCodeTheme(value)
}
</script>

<template>
<select ref="select" @change="changeCodeTheme()" >
  <option :value="item" v-for="(item,index) in codeThemeList" :selected="item===defaultCodeTheme">
    {{item}}
  </option>
</select>
</template>