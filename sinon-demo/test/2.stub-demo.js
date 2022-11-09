const {assert} = require("chai")
const sinon = require("sinon");

describe("stub all", function () {
    it("对原有函数的stub封装，可以监听原有函数的调用情况,以及模拟返回", function () {
        const obj = {
            func: () => {
                console.info(1);
            },
        };

        let stub = sinon.stub(obj, "func").returns(22);

        try {
            const result = obj.func(3);

            assert(stub.calledOnce);
            assert.equal(stub.getCall(0).args[0], 3);
            assert.equal(result, 22);
        } finally {
            stub.restore();
        }
    });
});