/*
* 保存代码块主题相关的数据
*/
import { defineStore } from "pinia";
// interface IThemeList{
//   'a11y-dark':string,
//   'a11y-light':string,
//   'agate':string,
//   'atom-one-dark-reasonable':string,
//   'atom-one-dark':string,
//   'default':string,
//   'felipec':string,
//   'github':string,
//   'gitgub-dark':string,
//   'gitgub-dark-dimmed':string,
//   'hybrid':string,
//   'vs2015':string,
//   'xcode':string,
// }
export default defineStore({
  id:'codeThemeStore',
  state:()=>{
    return{
      defineTheme:'github',  //默认主题
      theme:'',  //当前主题
    }
  },
  actions:{
    cheangeTheme(theme:string = 'github'){
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