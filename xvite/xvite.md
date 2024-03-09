# 创建工程

> npm create vite@latest

nodemon 自動刷新

作者：Vito_
链接：https://juejin.cn/post/7096374285593215012
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

# `babel`作用之一

`SyntaxError: Cannot use import statement outside a module`

原因是不能使用 `import` ，此刻如果就是想用import 怎么办呢？那么就需要借助 `@babel/node`.

> [如何在 Node.js 项目中使用 Babel - 掘金 (juejin.cn)](https://juejin.cn/post/6986579627829362724)

> **npm install -D @babel/core @babel/cli @babel/preset-env @babel/node**

```js
  "scripts": {
    "dev": "nodemon  src/index.js",
  },
```

==>

```js
  "scripts": {
    "dev": "nodemon  --exec babel-node src/index.js",
  },
```

# 使用babel目的

可以在xvite项目中安装vue来解析vue文件，但这里不想安装，因为vite-proiject里面有，所以我们可以安装babel
引入的时候才vite-project工程上解析，顺便学习一下babel插件的编写。

> [浅析组件库实现按需引入的几种方式 - 掘金 (juejin.cn)](https://juejin.cn/post/7037382933786673160)

babel-node 无法使用配置文件，插件不起作用，所以暂时还是安装vue先


# compileTemplate

## transformAssetUrls

```js
import _imports_0 from './assets/vue.svg'


const _hoisted_1 = /*#__PURE__*/_createElementVNode("div", null, [
  /*#__PURE__*/_createElementVNode("a", {
    href: "https://vitejs.dev",
    target: "_blank"
  }, [
    /*#__PURE__*/_createElementVNode("img", {
      src: "/vite.svg",
      class: "logo",
      alt: "Vite logo"
    })
  ]),
  /*#__PURE__*/_createElementVNode("a", {
    href: "https://vuejs.org/",
    target: "_blank"
  }, [
    /*#__PURE__*/_createElementVNode("img", {
      src: _imports_0,
      class: "logo vue",
      alt: "Vue logo"
    })
  ])
], -1 /* HOISTED */)
```

设置了为false之后

```js
const _hoisted_1 = /*#__PURE__*/_createElementVNode("div", null, [
  /*#__PURE__*/_createElementVNode("a", {
    href: "https://vitejs.dev",
    target: "_blank"
  }, [
    /*#__PURE__*/_createElementVNode("img", {
      src: "/vite.svg",
      class: "logo",
      alt: "Vite logo"
    })
  ]),
  /*#__PURE__*/_createElementVNode("a", {
    href: "https://vuejs.org/",
    target: "_blank"
  }, [
    /*#__PURE__*/_createElementVNode("img", {
      src: "./assets/vue.svg",
      class: "logo vue",
      alt: "Vue logo"
    })
  ])
], -1 /* HOISTED */)
```

正确的是这样：

```js
const sfcScriptBlock = compileScript(descriptor, {
    inlineTemplate: true,
    templateOptions: {
        transformAssetUrls: {
            base: filepath.substr(0, filepath.lastIndexOf('/'))
        },
    }
});
```
# Uncaught ReferenceError: process is not defined

在html页面上增加这个变量。



