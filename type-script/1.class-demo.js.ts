class Student {
    fullName: string;

    // 在构造函数的参数上使用public等同于创建了同名的成员变量。
    constructor(public firstName: string, public middleInitial: string,
                public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }

    hello() {
        console.log('hello ' + this.fullName);
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

user.hello();

console.log(greeter(user));
console.log(user.fullName);
console.log(user.firstName, user.middleInitial, user.lastName);