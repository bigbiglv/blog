<script setup lang="ts">
import { RouteRecordRaw, useRoute, useRouter } from "vue-router"
import { toRef, ref, computed,watch } from 'vue'
import { ChevronLeftIcon, XIcon } from "@heroicons/vue/solid";
import appStore from '@/store/appStore'
import { storeToRefs } from 'pinia';
const props = defineProps({
  routes: {
    type: Array<RouteRecordRaw>,
    required: true
  },
})
const storeApp = appStore()
const { lgMenu, mobile } = storeToRefs(storeApp)
const router = useRouter()
const route = useRoute()
const routes = toRef(props,'routes')

const newRoutes = computed(() => {
  return routes.value.filter(route => {
    return !route.meta?.isHidden
  })
})
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
//监听当前页面是不是笔记本列表页面的二级页面 是就打开二级页面
watch(() => route.path,(path)=>{
  for(let i = 0; i < routes.value.length; i++){
    //根据路径匹配当前选中的笔记本的列表
    //首页直接返回一级菜单
    if(path === '/'){
      children.value = []
      page.value = 0
      break
    }else if(routes.value[i].path === '/' + path.split('/')[1]){
      //打开二级页面
      select(routes.value[i])
      page.value = 1
      break
    }
  }
},{immediate:true})
function back(){
  path.value = ''
  children.value = []
  page.value = 0
}
function go(path:string){
  router.push(path)
  storeApp.closeMenu()
}
</script>

<template>
  <div class="w-full h-full overflow-hidden">
    <div class="w-full h-11 flex items-center px-2" :class="[page === 1 ? 'justify-between':'justify-end']">
      <button @click="back" v-if="page === 1">
        <ChevronLeftIcon class="w-8 h-8" />
      </button>
      <button @click="storeApp.closeMenu()" v-if="lgMenu && mobile">
        <XIcon class="w-6 h-6" />
      </button>
    </div>

    <div class="w-full h-full relative overflow-y-auto text-sm">
      <ul class="list" :class="[page === 0 ? 'left-0' : '-left-full']">
        <li class="cursor-pointer text-left" v-for="(item,index) in newRoutes" :key="index" @click="select(item)" >
          <span v-if="children">{{item.name}}</span>
        </li>
      </ul>
      <ul class="list" :class="[page === 1 ? 'left-0' : 'left-full']">
        <li class="cursor-pointer text-left" v-for="(item,index) in children" :key="index"  @click="go(item.path)">
          <span>{{item.meta?.title}}</span>
        </li>
      </ul>
    </div>
  </div>

</template>
<style scoped>
.list{
  @apply w-full list-none absolute top-0 transition-all text-center px-4 
}
</style>