<script setup lang="ts">
// import MItem from './MItem.vue'
import { RouteRecordRaw } from "vue-router"
import { toRef, ref, computed } from 'vue'
const props = defineProps({
  routes: {
    type: Array<RouteRecordRaw>,
    required: true
  },
})
const routes = toRef(props,'routes')
const path = ref('')  //当前选中的笔记本

const children = computed(()=>{
  return path.value ? routes.value.filter(item=>item.path === path.value)[0].children : []
})

</script>

<template>
  <div class="">

    <ul>
      <li v-for="(item,index) in routes">
        <span @click="path=item.path" v-if="children">{{item.name}}</span>
      </li>
    </ul>
    <ul>
      <li v-for="item in children">
        <router-link :to="item.path">{{item.meta?.title}}</router-link>
      </li>
    </ul>
  </div>

</template>