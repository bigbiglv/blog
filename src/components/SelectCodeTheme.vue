<script setup lang="ts">
import themeStore from '../store/themeStore';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
const storeTheme = themeStore()
const { codeThemeList } = storeToRefs(storeTheme)
const select = ref<HTMLSelectElement>()
function changeCodeTheme(){
  let value = select.value?.value
  storeTheme.cheangeCodeTheme(value)
}
</script>

<template>
<select ref="select" @change="changeCodeTheme()">
  <option :value="item" v-for="(item,index) in codeThemeList">
    {{item}}
  </option>
</select>
</template>