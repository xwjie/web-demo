# vue2-demo

## 创建工程
```
npm install -g @vue/cli-init
# `vue init` 的运行效果将会跟 `vue-cli@2.x` 相同
vue init webpack my-project
```

#

## Build Setup

```
npm config set chromedriver_cdnurl=http://cdn.npm.taobao.org/dist/chromedriver
```

```run dev
pnpm i webpack -D
pnpm i webpack-cli -D
pnpm i webpack-dev-server -D
pnpm i cross-env -D
# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
