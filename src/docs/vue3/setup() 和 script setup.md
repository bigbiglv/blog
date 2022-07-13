#### setup() 和 script setup

---

#### script setup

* 数据和方法不需要return出去
* 组件只需要引入不需要声明
* defineProps和defineEmits不需要手动引入

---

#### setup()

* 代码都写在setup()里面
* 最后把数据和方法return出去
* setup不能使用async语法糖 因为最后要返回一个对象（异步组件和suspense可以返回promise）
* 没有this

```js
//按需引入方法
import {ref,reactive} from 'vue'
export default {
  compontents:{...},
  props:{...},
  emits:{...},
  ...
  setup(props,contetext){
    //ref定义基础数据
    let num = ref(0)
    //reactive定义obj array 引用类型数据
    let obj = reactive({
      id:1
    })

    //定义方法
    function add(){
      num.value++
    }

    // 抛出
    return {
      num,
      add,
      obj
    }
  }
}
```
