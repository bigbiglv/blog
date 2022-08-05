<script setup lang="ts">
import { ref } from 'vue';
const blogs = ref([
  {
    name:'javascript',
    image: new URL('/src/assets/images/javascript.png', import.meta.url).href,
  },
  {
    name:'typescript',
    image: new URL('/src/assets/images/typescript.png', import.meta.url).href,
  },
  {
    name:'react',
    image: new URL('/src/assets/images/reactjs.png', import.meta.url).href,
  },
  {
    name:'vue',
    image: new URL('/src/assets/images/vue.png', import.meta.url).href,
  },
  {
    name:'nodejs',
    image: new URL('/src/assets/images/nodejs.webp', import.meta.url).href,
  },
  {
    name:'git',
    image: new URL('/src/assets/images/git.jpg', import.meta.url).href,
  },
])
</script>

<template>

<div>
  <ul class="list-none grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-3">
    <li v-for="(item,index) in blogs" :key="index" 
      class="overflow-hidden rounded-md shadow-md h-32 bg-cover bg-center
            transition-all duration-200 ease-in
            hover:shadow-xl hover:scale-105"
      :style="{backgroundImage:`url(${item.image})`}"
    >
    </li>
  </ul>
</div>

</template>