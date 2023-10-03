#

## html 带标签的模板

[模板字符串 - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Template_literals#%E5%B8%A6%E6%A0%87%E7%AD%BE%E7%9A%84%E6%A8%A1%E6%9D%BF)

- html长这样

```js
html(statics, ...args) {
    const templates = cache.get(statics) || createTemplate(statics, {
      funcBuilder: functionBuilder
    });

    return templates[0].create(templates, args, r);
}
```

```js
import {
    createSignal,
    onCleanup,
} from "https://cdn.skypack.dev/solid-js";
import { render } from "https://cdn.skypack.dev/solid-js/web";
import html from "https://cdn.skypack.dev/solid-js/html";

const App = () => {
    const [count, setCount] = createSignal(0);
    const timer = setInterval(() => setCount(count() + 1), 1000);
    onCleanup(() => clearInterval(timer));
    return html`<div>${count}</div>`;
};

render(App, document.getElementById("app"));
```

## h 

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


