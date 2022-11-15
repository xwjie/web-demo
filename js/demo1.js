/**
 *  
 *
 *  Created by 晓风轻(xwjie) on 2011/11/15
 */

let f1 = () => '前端自习课';
f1(); // -> '前端自习课'

let f2 = () => {};
f2(); // -> undefined

let f3 = () => ({});
f3(); // -> {}

function f(...args) {
    return args;
}

f(1, 2, 3); // -> [ 1, 2, 3 ]

f`Hello string ${'前端自习课'}, Hello boolean ${false}, Hello array ${[1, 2, 3]}`;
/*
[
    ["Hello string ",  ", Hello boolean ", ", Hello array ", ""],
    "前端自习课",
    false,
    [1, 2, 3]
]
*/

{}{}; // -> undefined
{}{}{}; // -> undefined
{}{}{}{}; // -> undefined
{foo: 'bar'}{}; // -> 'bar'
{}{foo: 'bar'}; // -> 'bar'
{}{foo: 'bar'}{}; // -> 'bar'
{a: 'b'}{c:' d'}{}; // -> 'd'
{a: 'b', c: 'd'}{}; // > SyntaxError: Unexpected token ':'
({}{}); // > SyntaxError: Unexpected token '{'


// 作者：pingan8787
// 链接：https://juejin.cn/post/7126931491702964260