
[Sinon.JS - Standalone test fakes, spies, stubs and mocks for JavaScript. Works with any unit testing framework.](https://sinonjs.org/)

stub 不只是可以模拟方法，字段也是可以的。

# spy

spy 生成一个间谍函数，它会记录下函数调用的参数，返回值，this 的值，以及抛出的异常。
而 spy 一般有两种玩法，一种是生成一个新的匿名间谍函数，另外一种是对原有的函数进行封装并进行监听。

# stub

stub 是带有预编程行为的函数。

简单点说，就是 spy 的加强版，不仅完全支持 spy 的各种操作，还能操作函数的行为。
和 spy 一样，stub 也能匿名，也能去封住并监听已有函数。
然而有一点和 spy 不同，当封装了一个已有函数后，原函数不会再被调用。

stub替换字段的时候，如果不指定value，默认本来的值。

```js
 sinon.stub(myObject, "hello").value("Sinon")
```

# mock

mock针对的是对象。

作者：alanwhy
链接：https://www.jianshu.com/p/750e03f94048
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。