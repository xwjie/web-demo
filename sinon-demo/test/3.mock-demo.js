import {assert} from "chai";
import sinon from "sinon";

describe("mock all", function () {
    it("mock的测试", function () {
        console.log("mock start;")

        const myAPI = {
            func1: function () {
                console.info("运行func1");
            },
            func2: function () {
                console.info("运行func2");
            },
        };

        const mock = sinon.mock(myAPI);

        try { // 期待
            // FIXME 这里没有返回2啊
            mock.expects("func1").once().returns(2);
            mock.expects("func2").twice();

            myAPI.func1();
            myAPI.func2();
            myAPI.func2();

            // 检验
            console.log("verify begin;")
            mock.verify();
            console.log("verify done;");

            // 检验之后不管了。
            myAPI.func2();
        } finally {
            mock.restore();
        }
    });

    it("mock的测试2", function () {
        console.log("mock2 start;");

        const myAPI = {
            func1: function () {
                console.info("运行func1");
            }
        };

        const mock = sinon.mock(myAPI);

        try { // 期待
            mock.expects("func1").twice();

            myAPI.func1();
            console.log("mock2 func1 1 end");

            myAPI.func1();
            console.log("mock2 func1 2 end");

            // 执行到这里就会抛异常
            myAPI.func1();
            console.log("mock2 func1 3 end")

            // 检验
            console.log("verify2 begin;")
            mock.verify();
            console.log("verify2 done;")
        } finally {
            mock.restore();
        }
    });

});