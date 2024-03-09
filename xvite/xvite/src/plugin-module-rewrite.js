import { parse } from 'es-module-lexer'; // 解析 import 语法
import MagicString from 'magic-string'; // 字符串具有不变性
import fs from 'fs';
import { PROJECT_DIR } from "./config.js";

export function rewriteImports(source) {
    // let imports = parse(source); // [[],[],boolean]
    let imports = parse(source)[0];
    let magicString = new MagicString(source); // overwrite();
    // n 匹配到的 from 'vue', s=>start e=>end ss=>整条语句的开始 se=>整条语句结束, d => dynamic >-1 是否是动态引入
    // [ 
    //     [
    //         { n: 'vue', s: 27, e: 30, ss: 0, se: 31, d: -1 },
    //         { n: './App.vue', s: 49, e: 58, ss: 32, se: 59, d: -1 },
    //         { n: './index.css', s: 68, e: 79, ss: 60, se: 80, d: -1 }
    //     ],
    //     []
    // ]
    if (imports.length) {
        imports.forEach(i => {
            let { s: start, e: end } = i;
            let id = source.substring(start, end);
            // 当前开头是 / 或者 . 的不需要重写
            if (/^[^/.]/.test(id)) {
                id = getModulePath(id);
                magicString.overwrite(start, end, id);
            }
        });
    }

    return magicString.toString();
}

function getModulePath(id) {
    //1. 存在package.json文件
    const packageJsonPath = `${PROJECT_DIR}\\node_modules\\${id}\\package.json`;

    if (fs.existsSync(packageJsonPath)) {
        const json = JSON.parse(String(fs.readFileSync(packageJsonPath)));
        console.log(packageJsonPath);

        if (json.module) {
            return `/node_modules/${id}/${json.module}`;
        }
    }

    //2. 不存在
    return `/@modules/${id}`;
}

