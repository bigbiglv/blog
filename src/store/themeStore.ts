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
      //代码块
      codeThemeList:[
        'a11y-dark',
        'a11y-light',
        'agate',
        'atom-one-dark-reasonable',
        'atom-one-dark',
        'default',
        'felipec',
        'github',
        'gitgub-dark',
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
    //代码块主题切换
    cheangeCodeTheme(theme:string = 'github'){
      let href = `./src/assets/highlinght/${theme}.css`
      let head = document.head || document.getElementsByTagName('head')[0];
      //获取head下所有link标签
      let links = head.getElementsByTagName('link');
      let lhref = []
      //将所有的link标签设为失效
      for(let i = 0;i<links.length;i++){
        //只在highlinght下的文件才限制
        if(links[i].rel === 'stylesheet' && links[i].href.split('/')[links[i].href.split('/').length-2] === 'highlinght'){
          let baseURI = links[i].baseURI.split('#')[0]
          //去除href中的baseURI
          lhref.push('./' + links[i].href.split(baseURI)[1])
          links[i].disabled = true;
        }
      }
      let index = lhref.indexOf(href)
      if(index === -1){
        let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        //插入到head标签中
        head.appendChild(link);
      }else{
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