const {assert} = require("chai")
const sinon = require("sinon");

describe("spy all", function () {
    it("传入Once的函数会被调用", function () {
        let spy = sinon.spy();

        spy();

        assert(spy.called);

        spy(1);
        spy(1);
        spy(2);

        assert.equal(spy.callCount, 4);

        // 参数为1调用了2次
        assert(spy.withArgs(1).calledTwice)
    });

    it("对原有函数的spy封装，可以监听原有函数的调用情况", function () {
        const obj = {
            func: () => {
                return 1 + 1;
            },
        };

        let spy = sinon.spy(obj, "func");

        // 同一个
        assert(spy === obj.func)

        obj.func(3);

        assert(obj.func.calledOnce);
        assert.equal(obj.func.getCall(0).args[0], 3);
    });
});