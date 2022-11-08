const {parse} = require("@babel/parser")
const babel = require("@babel/core")
const fs = require('fs')

// test.js代码在下面👇
const code = fs.readFileSync('./test.js').toString()

// 将原始code转为ast
const ast = parse(code, {sourceType: 'module'})

// transformFromAstSync接收原始ast，和原始code，生成新code
const result = babel.transformFromAstSync(ast, code, {
    presets: ['@babel/preset-env']
})

// 得到es5代码，写入test.es5.js
// fs.writeFileSync('./test.es5.js', result.code)

console.log(result.code);