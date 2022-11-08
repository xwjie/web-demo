module.exports = function () {
    return {
        // visitor 遍历回调
        visitor: {
            // type === 'Identifier' step into
            Identifier(path) {
                // n -> m
                if (path.isIdentifier({ name: "n" })) {
                    path.node.name = "m";
                }
            },
            // type === 'BinaryExpression' step into
            BinaryExpression(path) {
                // * -> -
                if (path.node.operator === "*") {
                    path.node.operator = "-";
                }
            },
        },
    };
};