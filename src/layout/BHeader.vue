<script setup lang="ts">
import themeStore from '@/store/themeStore'
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
const storeTheme = themeStore()
const { codeThemeList } = storeToRefs(storeTheme)
const select = ref<HTMLSelectElement>()
function test(){
  let value = select.value?.value
  storeTheme.cheangeCodeTheme(value)
}
</script>

<template>
  <div>
    header
    <select ref="select" @change="test()">
      <option :value="item" v-for="(item,index) in codeThemeList">
        {{item}}
      </option>
    </select>
  </div>
</template>


<style lang="scss" scoped>

</style>