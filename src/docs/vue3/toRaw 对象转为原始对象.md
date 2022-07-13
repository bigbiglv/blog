#### toRaw 对象转为原始对象

---

* 经过reactive包装过的响应式数据转为原始的obj，可用于提交接口数据

```js
import { reactive, toRaw } from 'vue'
...
let obj = reactive({
  id:1
}) 
//此时的obj不是纯粹的对象，是一个proxy对象
//使用toRaw变成普通对象
obj = toRaw(obj)
```
