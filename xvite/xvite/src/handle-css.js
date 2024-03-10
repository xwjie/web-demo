export function generateInsertCssCode(cssCode){
    return `
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(${JSON.stringify(cssCode)}));
    head.appendChild(style);
`;

}