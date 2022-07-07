<script setup lang="ts">
import GoTop from '@/components/GoTop.vue'

</script>

<template>
  <div class="py-5 flex-1 overflow-y-auto overflow-x-hidden" id="appMain">
    <router-view>
      <template #default="{ Component, route }">
        <transition name="fade-slide" mode="out-in" appear>
          <component :is="Component" :key="route.fullPath"/>
        </transition>
      </template>
    </router-view>
    <GoTop />

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