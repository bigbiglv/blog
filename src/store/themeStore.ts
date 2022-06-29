/*
* 保存主题相关的数据
*/
import { defineStore } from "pinia";
type Theme = "light";
type Themelist = Array<Theme>
export default defineStore({
  id:'themeStore',
  state:()=>{
    return {
      defineTheme:'light',  //默认主题
      theme:'light' as Theme,  //当前主题
      themeList:[  //主题列表
        'light',
      ] as Themelist,
      isDark:false,  //是否是暗色主题
    }
  },
  getters:{
  },
  actions:{
    //暗色主题
    changeDarkTheme(){      
      if(this.isDark){
        document.documentElement.classList.remove('dark')
        document.documentElement.classList.add(this.theme)
      }else{
        document.documentElement.classList.remove(this.theme)
        document.documentElement.classList.add('dark')
      }
      this.isDark = !this.isDark
    }
  }
})