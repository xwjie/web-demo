// babel-plugin-component.js
export default ({
    types
}) => {
    return {
        visitor: {
            ImportDeclaration(path) {
                const {
                    node
                } = path
                const {
                    value
                } = node.source
                console.log("----------------------------------------", value);

                if (value === '@vue/compiler-sfc') {
                    // 找出引入的组件名称列表
                    let specifiersList = []
                    node.specifiers.forEach(spec => {
                        if (types.isImportSpecifier(spec)) {
                            specifiersList.push(spec.imported.name)
                        }
                    })
                    // 给每个组件创建一条导入语句
                    const importDeclarationList = specifiersList.map((name) => {
                        // 文件夹的名称首字母为小写
                        let lowerCaseName = name.toLowerCase()
                        // 构造importDeclaration节点
                        return types.importDeclaration([
                            types.importDefaultSpecifier(types.identifier(name))
                        ], types.stringLiteral('xui/packages/' + lowerCaseName))
                    })
                    // 用多节点替换单节点
                    path.replaceWithMultiple(importDeclarationList)
                }
            }
        },
    }
}