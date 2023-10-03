class A {
    constructor() {
        this.aField = "aa";
    }
}

class B extends A{
    constructor() {
        super(); // Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        this.bField = "bb";
    }
}

const b = new B();
console.log(JSON.stringify(b));
console.log(b.hasOwnProperty("aField")); // true
console.log(JSON.stringify(b));