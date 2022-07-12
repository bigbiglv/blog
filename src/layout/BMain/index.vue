<script setup lang="ts">
import GoTop from '@/components/GoTop.vue'
import MNavBar from './MNavBar.vue'
import useGoTop from '@/hooks/useGoTop'
import { ref, computed, toRefs } from 'vue';
import { useScroll } from '@vueuse/core'
const appMain = ref<HTMLElement | null>(null)
const { x, y, isScrolling, arrivedState, directions } = useScroll(appMain)
const { left: toLeft, right: toRight, top: toTop, bottom: toBottom } = toRefs(directions)
const { goTop } = useGoTop(appMain)
//是否显示GoTop组件
const isShow = computed(()=>{
  return y.value > 50
})
</script>

<template>
  <div class="pb-5 flex-1 overflow-y-auto overflow-x-hidden relative" ref="appMain">
    <MNavBar :shrink="y > 50"/>
    <router-view>
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