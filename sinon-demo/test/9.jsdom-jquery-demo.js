import jsdom from "jsdom"; // 这里不能用mocha-jsdom，只能用jsdom
import jquery from 'jquery';

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
    // 需要和接口一致
    // Error: Cross origin http://localhost:8081 forbidden
    url: 'http://localhost:8080'
})

jquery(dom.window);
const $ = dom.window.$;

const document = dom.window.document;

document.body.innerHTML = '<div>xwjie</div>'
console.log($("div").html())

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

