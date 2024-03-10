import { parse, compileScript, compileStyle, compileTemplate } from "@vue/compiler-sfc";
import { readFile } from "./util.js";
import { generateInsertCssCode } from "./handle-css.js";

let globalScopedId = 0;
const globalScopedIdMap = {};

function getScopedId(filepath) {
    return String(globalScopedIdMap[filepath] || (globalScopedIdMap[filepath] = globalScopedId++));
}

export function generateVueCode(filepath, query) {
    const content = readFile(filepath);

    // 这里也可以带上模版一起编译，就不需要再次调用compileScript
    const { descriptor, error } = parse(content);

    let code = '';
    let scopedId = getScopedId(filepath);

    console.log(filepath, scopedId);

    if (!query.type) {
        const sfcScriptBlock = compileScript(descriptor, {
            id: scopedId,
            scoped: true,
            // 不包含模版的时候，下面的都不需要
            inlineTemplate: true,
            compilerOptions: {
                // id: scopedId,
                scopedId: 'data-v-' + scopedId,
            },
            templateOptions: {
                transformAssetUrls: {
                    // 相对路径
                    base: filepath.substr(0, filepath.lastIndexOf('/'))
                },
            }
        });
        // console.log(sfcScriptBlock);

        let content = sfcScriptBlock.content;
        code += content.replace(/((?:^|\n|;)\s*)export default/, '$1const __script=');

        // 模版分开编译
        // code += generateTemplateCode(scopedId, descriptor, filepath);

        // 样式
        code += generateImportCssCode(descriptor, filepath, scopedId);

        // 热加载
        code += `\n__script.__hmrId = ${scopedId}`;
        code += `\n__VUE_HMR_RUNTIME__ && __VUE_HMR_RUNTIME__.reload(${scopedId}, __script)`;

        code += `\nexport default __script`;
    }
    else if (query.type === 'style') {
        let content = descriptor.styles[query.index].content;

        const res = compileStyle({
            source: content,
            id: query.scoped,
            scoped: !!query.scoped,
        });

        code = generateInsertCssCode(res.code);
    }

    return code;
}

function generateImportCssCode(descriptor, filepath, scopedId) {
    let code = '';

    if (descriptor.styles) {
        for (let index = 0; index < descriptor.styles.length; index++) {
            const requestPath = filepath + `?type=style&index=${index}&scoped=${scopedId}`;
            code += `\nimport "${requestPath}"`;
        }
    }

    return code;
}



function generateTemplateCode(scopedId, descriptor, filepath) {
    let code = '';

    const sfcTemplateCompileResults = compileTemplate({
        id: scopedId,
        scoped: true,
        source: descriptor.template.content,
        transformAssetUrls: {
            // 相对路径
            base: filepath.substr(0, filepath.lastIndexOf('/'))
        },
    });

    console.log(sfcTemplateCompileResults.code);

    code += `\n`;
    code += sfcTemplateCompileResults.code.replace(/((?:^|\n|;)\s*)export function render/, '$1const _render=function');
    code += `\n__script.render =_render`;

    return code;
}


// test
const code = generateVueCode('/src/App.vue', {});
// console.log(code);