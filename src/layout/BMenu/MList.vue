<script setup lang="ts">
import { RouteRecordRaw, useRoute } from "vue-router"
import { toRef, ref } from 'vue'
const props = defineProps({
  routes: {
    type: Array<RouteRecordRaw>,
    required: true
  },
})
const route = useRoute()
const { path:routePath, matched} = route
const routes = toRef(props,'routes')
const path = ref('')  //当前选中的笔记本

const children = ref<RouteRecordRaw[]>([])
const page = ref(0)
function select(item:RouteRecordRaw){
  path.value = item.path
  if(item.children?.length){
    children.value = item.children
    page.value = 1
  }
}
//当前页面是不是笔记本列表页面 二级页面
if(matched.length > 1){
  for(let i = 0; i < routes.value.length; i++){
    //根据路径匹配当前选中的笔记本的列表
    if(routes.value[i].path === '/' + routePath.split('/')[1]){
      select(routes.value[i])
      break
    }
  }
  page.value = 1
}
function back(){
  path.value = ''
  children.value = []
  page.value = 0
}
</script>

<template>
  <div class="w-full h-full overflow-hidden">
    <button @click="back" v-if="page === 1">返回</button>
    <div class="w-full h-full relative overflow-y-auto">
      <ul class="list" :class="[page === 0 ? 'left-0' : '-left-full']">
        <li class="cursor-pointer" v-for="(item,index) in routes" :key="index">
          <span @click="select(item)" v-if="children">{{item.name}}</span>
        </li>
      </ul>
      <ul class="list" :class="[page === 1 ? 'left-0' : 'left-full']">
        <li class="cursor-pointer" v-for="(item,index) in children" :key="index">
          <router-link :to="item.path">{{item.meta?.title}}</router-link>
        </li>
      </ul>
    </div>
  </div>

</template>
<style scoped>
.list{
  @apply w-full list-none p-0 absolute top-0 transition-all
}
</style>