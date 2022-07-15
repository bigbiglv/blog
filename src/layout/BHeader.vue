<script setup lang="ts">
import SelectCodeThemeVue from '@/components/selectCodeTheme.vue'
import CheckDark from '@/components/CheckDark.vue'
import appStore from '@/store/appStore';
import { storeToRefs } from 'pinia';
import useBlogTitle from '@/hooks/useBlogTitle';
import { useRouter } from 'vue-router';
const router = useRouter()
const storeApp = appStore()
const { mobile } = storeToRefs(storeApp)
const { title } = useBlogTitle()

function goHome(){
  router.push('/')
  storeApp.closeMenu()
}
</script>

<template>
  <div class="h-20 w-full flex justify-between items-center px-5 lg:px-0 transition-200 transition-all">
    <div v-if="mobile" @click="storeApp.openMenu()">菜单</div>
    <!-- <SelectCodeThemeVue /> -->
    <h2 @click="goHome">{{title}}</h2>
    <CheckDark />
  </div>
</template>


<style lang="scss" scoped>

</style>