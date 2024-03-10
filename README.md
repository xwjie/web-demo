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

## 工具

[AST explorer](https://astexplorer.net/)

[Babel · The compiler for next generation JavaScript](https://babeljs.io/)

# message 消息交互

## eventsource

# mocha

测试框架

# nyc - nodejs 测试覆盖度工具nyc(Istanbul)

nyc+mocha+chai

# playwright 微软的ui测试工具

# [Puppeteer](https://zhaoqize.github.io/puppeteer-api-zh_CN/)

PO思想

- 2013 Martin Flower 提出思想。链接：[PageObject](https://martinfowler.com/bliki/PageObject.html)
- 2015 Selenium 官方加入PO思想。链接：[PO设计模式 | Selenium](https://www.selenium.dev/zh-cn/documentation/test_practices/encouraged/page_object_models/)

# sinon 单元测试框架

`Sinon`具有独立的spies, stub, mock功能

# solid 开发框架

```js
import {
    createSignal,
    onCleanup,
} from "https://cdn.skypack.dev/solid-js";
import { render } from "https://cdn.skypack.dev/solid-js/web";
import h from "https://cdn.skypack.dev/solid-js/h";

const App = () => {
    const [count, setCount] = createSignal(0);
    const timer = setInterval(() => setCount(count() + 1), 1000);
    onCleanup(() => clearInterval(timer));
    return h("div", {class:"test"}, count);
};

render(App, document.getElementById("app"));
```

# type-script 学习

ts-node 工具

# xvite （vue3）

参考vite，自己手写的vite项目。使用koa实现服务。

1. koa
2. vue的sfc函数使用
3. 在koa的拦截器里面，使用es-module-lexer和migic-string改写import的module
4. nodemon，热刷新node代码
5. babel-node，但是，babel的配置不起作用，估计是babel-node的bug。（指定错误的配置文件都不报错）
6. vite-plugin-inspect插件
