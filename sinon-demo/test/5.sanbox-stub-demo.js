import sinon from 'sinon'

//  the sinon object is a default sandbox

const myObject = {
    hello: "world",
    age:18,
    testFn(){
        return "abc";
    }
};

try {
    // 字符串
    let fieldStub = sinon.stub(myObject, "hello").value("Sinon")

    console.log('typeof fieldStub', typeof fieldStub); //

    console.log(myObject.hello);
    console.log(myObject);
    console.log('typeof myObject.hello', typeof myObject.hello);
    console.log(' fieldStub.called', fieldStub.called);

    console.assert(myObject.hello === fieldStub)

    // number
    sinon.stub(myObject, "age");

    console.log(myObject.age);
    console.log(typeof myObject.age);

    // function
    sinon.stub(myObject, 'testFn'); // undefined
    console.log(myObject.testFn());
} finally {
    // 这样还原就可以
    sinon.restore();
}

console.log(myObject.hello);// world
console.log(typeof myObject.hello);
console.log(myObject.testFn());
