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
      codeThemeList:[
        'a11y-dark',
        'a11y-light',
        'agate',
        'atom-one-dark-reasonable',
        'atom-one-dark',
        'default',
        'felipec',
        'github',
        'github-dark',
        'github-dark-dimmed',
        'hybrid',
        'vs2015',
        'xcode',
      ]
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
    },
    /*
    * 代码块主题新增
    * 新增link标签
    * @param theme 代码块主题名
    */
    setCodeTheme(theme?:string){
      //没传的时候设置为默认主题
      theme = theme ? theme : this.defaultCodeTheme
      const href = `/highlinght/${theme}.css`
      const link = document.createElement('link')
      const head = document.head || document.getElementsByTagName('head')[0];
      link.rel = 'stylesheet'
      link.href = href
      head.appendChild(link)
    },
    /*
    * 代码块主题切换
    * 通过link标签的disabled属性来切换
    * @param theme 代码块主题名
    */
    cheangeCodeTheme(theme:string = 'github'){
      let href = `/highlinght/${theme}.css`
      let head = document.head || document.getElementsByTagName('head')[0];
      //获取head下所有link标签
      let links = head.getElementsByTagName('link');
      //当前所有引入主题link的href
      let lhref = [] 
      //将所有的link标签设为失效
      for(let i = 0;i<links.length;i++){
        //只在highlinght下的文件才限制
        let isThemeLink = links[i].rel === 'stylesheet' && links[i].href.split('/')[links[i].href.split('/').length-2] === 'highlinght'
        if(isThemeLink){
          //去除href中的baseURI 添加到lhref数组
          let baseURI = links[i].baseURI.split('#')[0] 
          lhref.push('./' + links[i].href.split(baseURI)[1])
          links[i].disabled = true;
        }
      }
      //判断当前选中的主题是否已经引入
      let index = lhref.indexOf(href)
      if(index === -1){
        //添加link标签引入新的主题
        this.setCodeTheme(theme)
      }else{
        //在现有的link标签中使用disabled属性来切换
        for(let i = 0;i<links.length;i++){
          //只在highlinght下的文件才限制
          if(links[i].rel === 'stylesheet' && links[i].href.split('/')[links[i].href.split('/').length-2] === 'highlinght'){
            let baseURI = links[i].baseURI.split('#')[0]
            //去除href中的baseURI
            if(href === './' + links[i].href.split(baseURI)[1])
            links[i].disabled = false;
          }
        }
      }
    }
  }
})