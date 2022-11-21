type Person = {
    name : string;
    address : string;
};

const obj : Person = {
    name : 'itsuki' ,
    address : 'hangzhou' ,
};

function print(obj : Person) {
    // for (const key in obj) {
    //     // ❌
    //     // key:string 不能分配给 { name:string; age:number }类型
    //     console.log(key , obj[key].toUpperCase());
    // }

    let key : keyof Person;
    for (key in obj) {
        // ✅
        console.log(key , obj[key].toUpperCase());
    }
}

print(obj)

// 另外一种方法
Object.entries(obj).forEach(([k, v]) => {
    console.log(k, v.toUpperCase());
});

// [在 Ts 中如何正确的遍历一个对象 - 掘金](https://juejin.cn/post/7079687437445922853)
// 链接：https://juejin.cn/post/7079687437445922853
