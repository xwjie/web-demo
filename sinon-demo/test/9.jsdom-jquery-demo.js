import jsdom from "jsdom"; // 这里不能用mocha-jsdom，只能用jsdom
import jquery from 'jquery';

// 可为空
let html = `<html lang="en">
<head>
<meta charset="UTF-8">
             <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                         <meta http-equiv="X-UA-Compatible" content="ie=edge">
             <title>Document</title>
</head>
<body>
  
</body>
</html>`;

const dom = new jsdom.JSDOM(html, {
    // 需要和接口一致，否则可能报错
    // Error: Cross origin http://localhost:8081 forbidden
    url: 'http://localhost:8080'
})

const window = dom.window;
const document = window.document;

jquery(window);
const $ = window.$;

// dom操作
document.body.innerHTML = '<div id="test">xwjie</div>'
console.log($("#test").html())

// ajax
let url = "http://localhost:8080/1.json";
console.log('get:', url);

$.get(url, (data) => {
    console.log('result:', data);
});

$.ajax({
    url,
    success: function (data) {
        console.log('result2:', data);
    }
});

