`n.xxx.js` 可以单独运行

# 命令行运行

先安装 `npm install --save-dev babel-cli`
然后 `npx babel test.js`

# 插件

一个最简单的插件就完成了，它做了两件事，将所有变量n转换成m，将所有二元表达式的运算符*转换成-。

> npx babel --plugins ./babel-plugin-replaceN2M.js test.js

[Babel原理浅析(二)： 手写一个极简插件 - David's Blog](https://luoluoqinghuan.cn/2021/04/09/howTransformBabelAst/)

# 文档

[手把手带你走进Babel的编译世界 - 掘金](https://juejin.cn/post/7078482623387402271)

# 工具

[AST explorer](https://astexplorer.net/)

[Babel · The compiler for next generation JavaScript](https://babeljs.io/)