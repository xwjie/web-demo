 function A () {
    this.aField = "aa"
}

 function B () {
    this.bField = "bb";
}

// 要放到new B()之前修改原型 
// 否则 b.[[property]] 就是Object了。后面在改就没有用了
// 所以 b.aField 就不存在
B.prototype = new A(); // 这种是不正确的，修改B原型的时候可能会修改了A

const b = new B();
console.log(JSON.stringify(b));

console.log(b.hasOwnProperty("aField"), b.aField);//TODO: undefined
console.log(JSON.stringify(b));