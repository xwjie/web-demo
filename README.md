# web-demo

# 笔记

- 环境问题：`webpack` 引入循环依赖导致 `const`变量变成了 `undefined`
  [webpack系列1--循环依赖解析与处理方式总结 - 简书](https://www.jianshu.com/p/1040a161e3ba)

[TodoMVC](https://todomvc.com/)

```js
// 要带js后缀
import {sleep} from "./util.js"; 

// require不需要后缀
require('./util')
```


# AST

[为啥套娃？聊聊 babel、jscodeshift 和阿里妈妈的 gogocode - 知乎](https://zhuanlan.zhihu.com/p/384088348)

[与社区流行工具对比 | GoGoCode](https://gogocode.io/zh/docs/specification/vs)

[使用 GoGoCode 将 Vue2 项目升级到 Vue3 - 知乎](https://zhuanlan.zhihu.com/p/436490963)
