/*
* 保存代码块主题相关的数据
*/
import { defineStore } from "pinia";
export default defineStore({
  id:'codeThemeStore',
  state:()=>{
    return{
      defineTheme:'github',  //默认主题
    }
  },
  actions:{
    cheangeTheme(){
      console.log(document.head)
    }
  }
})