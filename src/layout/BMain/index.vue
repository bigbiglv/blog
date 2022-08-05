<script setup lang="ts">
import GoTop from '@/components/GoTop.vue'
import MNavBar from './MNavBar.vue'
import useGoTop from '@/hooks/useGoTop'
import appStore from '@/store/appStore';
import { ref, computed, toRefs } from 'vue';
import { useScroll } from '@vueuse/core'
const storeApp = appStore()

const appMain = ref<HTMLElement | null>(null)
const { x, y, isScrolling, arrivedState, directions } = useScroll(appMain)
const { left: toLeft, right: toRight, top: toTop, bottom: toBottom } = toRefs(directions)
const { goTop } = useGoTop(appMain)
//是否显示GoTop组件
const isShow = computed(()=>{
  return y.value > 50
})
const shrink = computed(()=>{
  return y.value > 100
})
</script>

<template>
  <div class="pb-5 flex-1 overflow-y-auto overflow-x-hidden relative px-2 no-scrollbar lg:px-0 lg:scrollbar " 
       ref="appMain" style="scroll-padding-top:50px;">
    <MNavBar :shrink="shrink" v-if="!storeApp.mobile"/>
    <router-view class="px-4">
      <template #default="{ Component, route }">
        <transition name="fade-slide" mode="out-in" appear>
          <component :is="Component" :key="route.fullPath"/>
        </transition>
      </template>
    </router-view>
    <GoTop :isShow="isShow" @go="goTop" />
  </div>
</template>


<style scoped>
.fade-slide-leave-active,
.fade-slide-enter-active {
  transition: all 0.3s;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>