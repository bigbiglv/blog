<script setup lang="ts">
import { ref } from 'vue';
const blogs = ref([
  {
    name:'javascript',
    image:'/src/assets/images/javascript.png',
  },
  {
    name:'typescript',
    image:'/src/assets/images/typescript.png',
  },
  {
    name:'react',
    image:'/src/assets/images/reactjs.png',
  },
  {
    name:'vue',
    image:'/src/assets/images/vue.png',
  },
  {
    name:'nodejs',
    image:'/src/assets/images/nodejs.webp',
  },
  {
    name:'git',
    image:'/src/assets/images/git.jpg',
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