import { parse, compileScript, compileStyle } from "@vue/compiler-sfc";
import { readFile } from "./util.js";
import { generateInsertCssCode } from "./handle-css.js";

export function generateVueCode(filepath, query) {
    const content = readFile(filepath);
    const { descriptor, error } = parse(content);
    console.log(descriptor);

    let code = '';

    if (!query.type) {

        const sfcScriptBlock = compileScript(descriptor, {
            inlineTemplate: true,
            templateOptions: {
                transformAssetUrls: {
                    base: filepath.substr(0, filepath.lastIndexOf('/'))
                },
            }
        });
        // console.log(sfcScriptBlock);

        let content = sfcScriptBlock.content;
        code += content.replace(/((?:^|\n|;)\s*)export default/, '$1const __script=');

        // 样式
        if (descriptor.styles) {
            for (let index = 0; index < descriptor.styles.length; index++) {
                const requestPath = filepath + `?type=style&index=${index}`;
                code += `\nimport "${requestPath}"`;
            }
        }

        code += `\nexport default __script`;
    }
    else if (query.type === 'style') {
        let content = descriptor.styles[query.index].content;

        const res = compileStyle({
            source: content,
            id: ''
        });

        code = generateInsertCssCode(res.code);
    }

    return code;
}

// test
const code = generateVueCode('/src/App.vue', {});
console.log(code);