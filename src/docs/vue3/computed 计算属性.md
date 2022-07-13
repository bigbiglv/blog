#### computed 计算属性

---

* 通过hooks的形式引入，函数直接返回响应式数据的值

```js
import {ref,computed} from 'vue'
let num2=ref(0)
let num1=ref(0)
let sum = computed(()=>{
  return num1.value+num2.value
})
let sum=computed({
  get(){},
  set(value){}
})
```
