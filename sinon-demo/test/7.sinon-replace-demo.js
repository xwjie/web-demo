import {createSandbox} from 'sinon';

const sandbox = createSandbox();

var myObject = {
    myMethod: function () {
        return "apple pie";
    },
    get myProperty() {
        return 'apple pie';
    },
    set myProperty(value) {
        this.prop = value;
    },
};

// replace

sandbox.replace(myObject, "myMethod", function () {
    return "strawberry";
});

console.log(myObject.myMethod());// strawberry

// replaceGetter

sandbox.replaceGetter(myObject, 'myProperty', function () {
    return 'strawberry';
});

console.log(myObject.myProperty);// strawberry

// replaceSetter

// 这里报错了，不能同时replaceSetter 、 replaceGetter
// TypeError: Attempted to replace myProperty which is already replaced
// sandbox.replaceSetter(myObject, "myProperty", function (value) {
//     this.prop = "strawberry " + value;
// });

myObject.myProperty = "pie";

console.log(myObject.prop); // strawberry pie

