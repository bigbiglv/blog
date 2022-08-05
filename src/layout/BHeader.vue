<script setup lang="ts">
import SelectCodeThemeVue from '@/components/selectCodeTheme.vue'
import CheckDark from '@/components/CheckDark.vue'
import appStore from '@/store/appStore';
import { storeToRefs } from 'pinia';
import useBlogTitle from '@/hooks/useBlogTitle';
import { useRouter } from 'vue-router';
import { MenuIcon } from '@heroicons/vue/solid'

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
  <div class="h-20 w-full flex items-center lg:justify-between px-5 lg:px-0 transition-200 transition-all">
    <div class="mr-2" v-if="mobile" @click="storeApp.openMenu()">
      <MenuIcon class="w-6 h-6 active:opacity-75" />
    </div>
    <!-- <SelectCodeThemeVue /> -->
    <h2 @click="goHome" class="text-base lg:text-xl truncate">{{title}}</h2>
    <CheckDark v-if="!mobile"/>
  </div>
</template>