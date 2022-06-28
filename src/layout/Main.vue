<script setup lang="ts">
import { ref } from 'vue';
import Mackdown from '../components/Mackdown.vue';
import { useRoute, useRouter } from 'vue-router';
import { computed, watch } from 'vue';
const route  = useRoute()
const router = useRouter()
console.log(route)
console.log(router)
const keys = ref(0)
function changeKey() {
  keys.value++
}
</script>

<template>
  main
  <router-view>
    <template #default="{ Component, route }">
      <component :is="Component" :key="route.fullPath"/>
    </template>
  </router-view>
  <!-- <Mackdown :key="keys" @change="changeKey"></Mackdown> -->


</template>


<style scoped>

</style>