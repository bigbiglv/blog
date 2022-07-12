import { defineStore } from "pinia"
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
const breakpoints = useBreakpoints(breakpointsTailwind)
const lg = breakpoints.between('md', 'lg')
export default defineStore({
  id:'appStore',
  state:()=>{
    return{
      lg
    }
  },

})