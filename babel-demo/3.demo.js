const { parse } = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;

const code = "const square = n => n * n";

// parse the code -> ast
const ast = parse(code);

console.log(`originAST: ${JSON.stringify(ast, null, '  ')}`);
// transform the ast
traverse(ast, {
    enter(path) {
        if (path.node.type !== "ArrowFunctionExpression") return;

        path.arrowFunctionToExpression({
            allowInsertArrow: false,
            noNewArrows: true,
            specCompliant: false,
        });
    },
});

console.log(`newAST: ${JSON.stringify(ast, null, '  ')}`)
// generate code <- ast
const output = generate(ast, code);
console.log(output.code);