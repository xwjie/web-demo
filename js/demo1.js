/**
 *  
 *
 *  Created by 晓风轻(xwjie) on 2011/11/15
 */

{
    // &&=, ||=, ??=
    // x &&= y 就是 x && x = y
    let x = 1;
    let y = 2;
    x &&= y;
    console.log(x);
}

let f1 = () => '前端自习课';
f1(); // -> '前端自习课'

let f2 = () => { };
f2(); // -> undefined

let f3 = () => ({});
f3(); // -> {}

//-------------

{ } { }; // -> undefined
{ } { } { }; // -> undefined
{ } { } { } { }; // -> undefined
{ } { } { } { } { };
{ foo: 'bar' } { }; // -> 'bar'  这里 foo是标签，｛｝是代码块，不是对象
{ } { foo: 'bar' }; // -> 'bar'
{ } { foo: 'bar' } { }; // -> 'bar'
{ a: 'b' } { c: ' d' } { }; // -> 'd'
// {a: 'b', c: 'd'}{}; // > SyntaxError: Unexpected token ':'
// ({}{}); // > SyntaxError: Unexpected token '{'

// 当解析到 {} 会返回 undefined，而解析 {foo: 'bar'}{} 时，表达式 {foo: 'bar'} 返回 'bar'。
// 这里的 {} 有两重含义：表示对象，或表示代码块。
// 例如，在 () => {} 中的 {} 表示代码块。所以我们必须加上括号：() => ({}) 才能让它正确地返回一个对象。
// 因此，我们现在将 {foo: 'bar'} 当作代码块使用，则可以在终端中这样写：
// if (true) {
//   foo: "bar";
// } // -> 'bar'
// 复制代码
// 啊哈，一样的结果！所以 {foo: 'bar'}{} 中的花括号就是表示代码块


//----------------------
{
    const a = (() => {
        try {
            return 2;
        } finally {
            return 3;
        }
    })();
    console.log(a);
}

// ------------
typeof []; // -> 'object'
typeof null; // -> 'object'

null instanceof Object; // false

// ----------- 标签
{
    let str = '';

    loop1:
    for (let i = 0; i < 10; i++) {
        if (i === 1) {
            continue loop1;
        }
        else if (i >= 6) {
            break;
        }

        str = str + i;
    }

    console.log(str); // 02345
}

// 作者：pingan8787
// 链接：https://juejin.cn/post/7126931491702964260