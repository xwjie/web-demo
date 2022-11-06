const {assert} = require("chai")
const sinon = require("sinon");

describe("stub all", function () {
    it("对原有函数的stub封装，可以监听原有函数的调用情况,以及模拟返回", function () {
        const obj = {
            func: () => {
                console.info(1);
            },
        };
        sinon.stub(obj, "func").returns(22);

        const result = obj.func(3);

        assert(obj.func.calledOnce);
        assert.equal(obj.func.getCall(0).args[0], 3);
        assert.equal(result, 22);
    });
});