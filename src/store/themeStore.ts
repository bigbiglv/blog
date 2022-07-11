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
      defaultTheme:'light',  //默认主题
      theme:'light' as Theme,  //当前主题
      themeList:[  //主题列表
        'light',
      ] as Themelist,
      isDark:false,  //是否是暗色主题
      //代码块主题
      defaultCodeTheme: localStorage.getItem('codeTheme') || 'github-dark',   //默认代码块主题
      codeThemeList:[] as string[],
    }
  },
  getters:{
  },
  actions:{
    //引入所有code主题
    importCodeTheme(){
      let modules = import.meta.globEager('@/assets/css/highlinght/*.css')
      let list:string[] = []
      for (const key in modules) {
        if (Object.prototype.hasOwnProperty.call(modules, key)) {
          const name = (key?.match(/(?<=highlinght\/).*?(?=.css)/) as string[])[0]
          this.codeThemeList.push(name)
        }
      }
    },
    //切换code主题
    setCodeTheme(theme:string){
      const app = document.getElementById('app') 
      //移除app元素的所有class
      const classList = app?.classList
      app?.classList.remove(...classList)
      app?.classList.add(theme)
    },
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
    },
  }
})