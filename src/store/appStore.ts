import { defineStore } from "pinia"
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
const breakpoints = useBreakpoints(breakpointsTailwind)
const sm = breakpoints.smaller('sm')
const md = breakpoints.between('sm', 'md')
const lg = breakpoints.between('md', 'lg')
export default defineStore({
  id:'appStore',
  state:()=>{
    return{
      //小屏的情况下是否显示menu
      lgMenu:false,
    }
  },
  getters:{
    //是不是小屏
    lg:()=>{
      return  sm.value || md.value || lg.value
    }
  },
  actions:{
    showLgMenu(){
      //小屏的时候显示menu
      if(!this.lg) return this.lgMenu = false
      this.lgMenu = true
    }
  }

})