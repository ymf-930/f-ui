## ScrollBar 滚动

由于默认浏览器滚动条极为丑陋切不同浏览器之间样式不统一，故封装一个滚动组件用于实现滚动

### 用法

使用`f-scrollbar`进行包裹，默认`slot`为内容显示区域,如当前示例所包含的滚动结构如下:
:::demo

```html
<template>
  <div style="height: 400px;">
    <f-scrollbar style="height:100%;" ref="componentScrollBar">
      <p v-for="i in 40" :key="i">我是填充内容....</p>
    </f-scrollbar>
  </div>
</template>
```

:::

注意：如果内容区域不超过容器高度则不会生成滚动条

### 使用贴士

- f-scrollbar的父层要有固定高度
- f-scrollbar的高度要设成100%
- 如果出现横滚动条，请添加css（.fei-scrollbar__wrap{overflow-x:hidden;}）

### Props

| 参数      | 说明    | 类型      | 可选值  | 默认值 |
|---------- |-------- |---------|-------------  |---- |
| native    | 是否采用原生滚动 (隐藏原生滚动条)  | boolean | true | false |
| always    | 是否一直显示，而非悬停显示  | boolean | true | false |
| wrapStyle | 内联方式 自定义wrap容器的样式  | Object  | — | {} |
| wrapClass | 类名方式 自定义wrap容器的样式  | Object  | — | {} |
| viewClass | 类名方式 自定义view容器的样式  | Object  | — | {} |
| viewStyle | 内联方式 自定义view容器的样式  | Object  | — | {} |
| barStyle  | 滚动条thumb样式  | Object  | — | {} |
| barWrapStyle | 滚动条bar样式  | Object  | — | {} |
| noresize  | 如果 container 尺寸不会发生变化，最好设置它可以优化性能  | boolean | true | false |


