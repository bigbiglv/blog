/*
* 回到顶部
*/
import { Ref } from 'vue';
export default function useGoTop(el: Ref<HTMLElement | null>) {
  const goTop = function(){
    el.value?.scrollTo({
      behavior: 'smooth',
      top: 0
    })
  }
  return{
    goTop
  }
}