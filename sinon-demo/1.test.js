const sinon = require('sinon');

let spy = sinon.spy();

let names = Object.getOwnPropertyNames(spy);
names.sort();

names.forEach(name =>{
    console.log( name + " : " + typeof  spy[name]);
})