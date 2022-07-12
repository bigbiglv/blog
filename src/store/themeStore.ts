/*
* 保存主题相关的数据
*/
import { defineStore } from "pinia";
export default defineStore({
  id:'themeStore',
  state:()=>{
    return {
      defaultAppTheme:localStorage.getItem('appTheme') || '',  //默认主题
      appTheme:localStorage.getItem('appTheme') || '',  //当前主题
      appThemeList:[
        'app-pink'
      ] as string[],
      isDark:false,  //是否是暗色主题
      //代码块主题
      defaultCodeTheme: localStorage.getItem('codeTheme') || 'github-dark',   //代码块主题默认为github-dark
      codeTheme: localStorage.getItem('codeTheme') || 'github-dark',   //代码块主题
      codeThemeList:[] as string[],
    }
  },
  getters:{
  },
  actions:{
    //初始化主题
    initTheme(){
      //引入代码块主题
      this.importCodeTheme()
      //app
      this.setAppTheme(this.defaultAppTheme)
      //代码块
      this.setCodeTheme(this.defaultCodeTheme)
    },
    //app切换主题
    setAppTheme(theme:string){
      const app = document.getElementById('app') 
      //移除app元素的所有class
      const classList:string[] = []
      app?.classList?.forEach(className => {
        console.log('className',className)
        //类名是 app- 开头的才移除
        if(className.startsWith('app-')){
          classList.push(className)
        }
      })
      app?.classList.remove(...classList)
      app?.classList.add(theme)
      this.appTheme = theme
      localStorage.setItem('appTheme', theme)
    },
    //引入所有code主题
    importCodeTheme(){
      let modules = import.meta.globEager('@/assets/css/highlinght/*.css')
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
      const classList:string[] = []
      app?.classList?.forEach(className => {
        console.log('className',className)
        //类名不是 app- 开头的才移除
        if(!className.startsWith('app-')){
          classList.push(className)
        }
      })
      app?.classList.remove(...classList)
      app?.classList.add(theme)
      this.codeTheme = theme
      localStorage.setItem('codeTheme', theme)
    },
    //暗色主题
    changeDarkTheme(){      
      this.isDark ? document.documentElement.classList.remove('dark') : document.documentElement.classList.add('dark')
      this.isDark = !this.isDark
    },
  }
})