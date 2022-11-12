import sinon from "sinon";

let spy = sinon.spy();

let spyNames = Object.getOwnPropertyNames(spy);
spyNames.sort();

console.log('spy的属性/方法')
printArray(spy, spyNames);

let stub = sinon.stub();

let stubNames = Object.getOwnPropertyNames(stub);
let onlyStubNames = stubNames.filter(name => !spyNames.includes(name));
onlyStubNames.sort();

console.log('stub独有的属性/方法')
printArray(stub, onlyStubNames);

function printArray(obj, names) {
    names.forEach(name => {
        console.log(name + " : " + typeof obj[name]);
    })
}


