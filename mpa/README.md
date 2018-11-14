# mpa

> 使用`vue-cli2`搭建的`多页面应用`(`MPA`)  
> 参考简书[使用 Vue-cli 搭建多页面应用时对项目结构和配置的调整](https://www.jianshu.com/p/0a30aca71b16)

## 步骤

1. 添加依赖

> npm install glob -D

2. 目录结构

```
├── build
│   ├── build.js
│   ├── check-versions.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── src
│   ├── assets
│   │   ├── css
│   │   ├── font
│   │   └── img
│   ├── components
│   │   └── popup.vue
│   └── pages
│       ├── data
│       │   ├── data.html
│       │   ├── data.js
│       │   └── cell.vue
│       └── index
│           ├── index.html
│           ├── index.js
│           ├── index.vue
│           └── router
│               └── index.js
└── static
```

3. 修改 webpack 配置

> 需要修改的配置文件
>
> - config/index.js 打包后的资源路径
> - build/utils.js
> - build/webpack.base.conf.js
> - build/webpack.dev.conf.js
> - build/webpack.prod.conf.js

4. 需要修改的地方

### src/pages/data.js

> 用 `render函数` 取代了组件的写法

```js
import Vue from 'vue'
import data from './data.vue'

new Vue({
  el: '#app',
  render: h => h(data)
})
```
