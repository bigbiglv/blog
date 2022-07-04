<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';
const router = useRouter()
const routes = ref(router.options.routes)
</script>

<template>
<div class="w-44">
  <ul v-for="(item,index) in routes">
    {{item.name}}
    <li class="flex flex-col">
      <router-link v-for="(child,i) in item.children" :to="item.path === '/' ? child.path : item.path+'/'+child.path">
        <!-- {{!child.meta?.hidden ? child.name : ''}} -->
        {{child.name}}
      </router-link>
    </li>
  </ul>
</div>
</template>


<style scoped>

</style>