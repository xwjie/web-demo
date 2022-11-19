# vue3-todolist

```
>npm init vue@latest
Need to install the following packages:
  create-vue@3.3.4
Ok to proceed? (y)

Vue.js - The Progressive JavaScript Framework

Project name: ... vue3-todolist
Add TypeScript? ... No / Yes 
Add JSX Support? ... No / Yes
Add Vue Router for Single Page Application development? ... No / Yes
Add Pinia for state management? ... No / Yes
Add Vitest for Unit Testing? ... No / Yes
Add Cypress for End-to-End testing? ... No / Yes
Add ESLint for code quality? ... No / Yes
Add Prettier for code formatting? ... No / Yes

Scaffolding project in D:\Github\web-demo\todolist-demo\todolist-vue3\vue3-todolist...

Done. Now run:

  cd vue3-todolist
  npm install
  npm run lint
  npm run dev
```

## 安装 cypress 失败

[Failed to install Cypress？我们对它说不！ - 掘金](https://juejin.cn/post/7039154634111320100)

访问 https://download.cypress.io/desktop

> set CYPRESS_INSTALL_BINARY=C:\\Users\\Administrator\\Downloads\\cypress.zip

## Vite 的打包和预览功能

而在打包成功后，我们通常需要在浏览器中测试一下打包出来的东西有没有问题，那么一种方法是通过 Live Server 插件打开我们的 index.html 文件，但是，Vite 也提供给了我们另外一种方式，我们可以执行下面的命令开启一个本地服务器，预览打包后的项目：

> npx vite preview

要运行`npm run preview`, 要先执行 `npm run build`。

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
