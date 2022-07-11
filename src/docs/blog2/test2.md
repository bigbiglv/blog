---
name: blog2-test2
title: blog2-test2
meta:
  - name: description
    content: blog 
---
#### watch和watchEffect 数据监听

---

#### 注意

* 在setup()或script setup创建的侦听器是绑定在当前组件实例上的，会随着组件的卸载而销毁
* **如果在异步回调中创建一个侦听器的话是不会随着组件的卸载而销毁的，需要手动停止**
😁

```ts
import { ref,watch } from 'vue'
let test = ref(0)
setInterval(() => {
  test.value++
}, 1000);
setTimeout(() => {
  //不会销毁
  const unwatch = watch(test,()=>{
    console.log('test',test)
  })
}, 2000);
//调用侦听器返回的函数就能停止
unwatch()
```

##### watch

* 第一个参数监听的数据
* 第二个参数回调函数
* 第三个参数属性设置 immediate，deep

ref 定义的数据分为基本类型和引用类型

* 第一个参数基本数据类型不需要加.value而引用数据类型就需要

```js
 // 1.监听ref定义的1个数据

 //基本数据类型 不需要 .value
watch(num,(newVal,oldVal)=>{
   console.log('num改变了',newVal,oldVal)
},{deep:true})

 //引用数据类型 需要 .value
watch(obj.value,(newVal,oldVal)=>{
   console.log('obj改变了',newVal,oldVal) 
})
 //或者
 //监听某个属性的时候会失效
watch(obj,(newVal,oldVal)=>{
   console.log('obj改变了',newVal,oldVal)
},{deep:true})

 // 2.监听ref定义的2个数据
watch([num,num2],(newVal,oldVal)=>{
   // newVal,oldVal也变成数组的形式
   console.log('num或num2改变了',newVal,oldVal)
})



```

reactive定义的数据

* 内部属性是基本数据类型的时候不需要deep属性也能监听到但deep不能手动关闭
* 内部属性是引用数据类型的时候就需要添加deep，因为监听的是内存地址

```js
 // 1.监听reactive定义的数据 
 watch(obj,(newVal,oldVal)=>{
   // ! oldVal有问题
   console.log('obj改变了',newVal,oldVal)
 })

 // 2.监听reactive定义的数据的某一个属性
 watch(()=>obj.obj2.idd,(newVal,oldVal)=>{
   console.log('obj.obj2.idd改变了',newVal,oldVal)
 })

 // 3.监听reactive定义的数据的多个属性
 watch(()=>{return [obj.obj2.idd,obj.id]},(newVal,oldVal)=>{
   console.log('obj.obj2.idd或obj.id改变了',newVal,oldVal)
 })
 // 或
 watch([()=>obj.obj2.idd,()=>obj.id],(newVal,oldVal)=>{
   console.log('obj.obj2.idd或obj.id改变了',newVal,oldVal)
 })

 // 4.监听reactive定义的数据的属性也是一个对象 obj2为对象
 // ! 这个时候需要加deep:true
 watch(()=>obj.obj2,(newVal,oldVal)=>{
   console.log('obj.obj2改变了',newVal,oldVal)
 },{deep:true})
```

---

##### watchEffect

* watchEffect函数体内使用的那个参数就监听哪个参数
* 有点像computed，但是computed更注重return的值，watchEffect更注重过程，不用return

```js
watchEffect(()=>{
   //用到了obj.id就只监听obj.id
   console.log('watchEffect',obj.id)
})
```
