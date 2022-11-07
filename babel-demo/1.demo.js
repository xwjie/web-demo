const parser = require("@babel/parser"); // 需要导入
const generator = require("@babel/generator").default // AST 转换为 代码

// 代码转化为 ast 结构，与网站上一样
let jsCode = `
let a = 1;
const b = 2;
`;

let ast = parser.parse(jsCode)

// 如果有 import export 关键字，需要使用该参数
// let ast1 = parser.parse(js_code,{
//     sourceType:"module",
// })

console.log(JSON.stringify(ast, null, 2));

let code = generator(ast).code
console.log(code);
console.log();

let code1 = generator(ast, {
    retainLines: true, // 默认 false ，是否输出与源代码相同的行号
    comments: false, // 默认 true，是否保留注释
    compact: true // 默认 false，是否压缩代码
}).code;

console.log(code1);
console.log();