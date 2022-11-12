import sinon from 'sinon'

//  the sinon object is a default sandbox

const myObject = {
    hello: "world",
};

try {
    sinon.stub(myObject, "hello").value("Sinon");

    console.log(myObject.hello);
    console.log(typeof myObject.hello);
} finally {
    // 这样还原就可以
    sinon.restore();
}


console.log(myObject.hello);
console.log(typeof myObject.hello);

// world