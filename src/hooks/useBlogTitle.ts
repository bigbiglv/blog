/*
* 获取笔记名 
*/
import { useRoute } from 'vue-router'
import { watch, ref } from 'vue'
export default function useBlogTitle() {
  const route = useRoute()
  let title = ref('')
  watch(()=>route.meta.title,()=>{
    title.value = route.meta?.title as string
  },{immediate:true})
  return {
    title
  }
}