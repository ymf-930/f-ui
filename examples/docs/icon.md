## Icon 图标

图标这里使用了阿里[iconfont](https://www.iconfont.cn/)图标库生成了图标，图标来源于开源项目 ionicons，结合整理添加了一些其他的图标。

i 标签可以直接设置样式类名为 `f-iconfont f-icon-xxx` 来使用即可。icon 组件可以只设置 name 来实用。 设置 `icon-is-rotating` 可以开启旋转

:::demo size 和 color 可以设置字体大小和颜色

```html

<div class="demo-icon">
  <i class="f-iconfont f-icon-addteam"></i>
  <f-icon name="read-fill" color="#ff53a5"></f-icon>
  <f-icon name="loading" class="icon-is-rotating"></f-icon>
  <f-icon name="formatpainter" type="button" @click="$message('点击了图标')"></f-icon>
  <p flex="cross:center">
    图标选择器：
  <div style="width: 220px;">
    <f-icon-select></f-icon-select>
  </div>
  </p>
</div>
```

:::

### 图标集合

<icon-pane></icon-pane>

