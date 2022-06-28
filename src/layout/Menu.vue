<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';
const router = useRouter()
const routes = ref(router.options.routes)
</script>

<template>
<ul>
  <li v-for="(item,index) in routes">
    {{item.name}}
    <router-link v-for="(child,i) in item.children" :to="item.path === '/' ? '/' : item.path+'/'+child.path">
      {{child.name}}
    </router-link>
  </li>
</ul>
</template>


<style scoped>

</style>