const {assert} = require("chai")
const sinon = require("sinon");

describe("测试Once函数", function () {
    it("传入Once的函数会被调用", function () {
        let spy = sinon.spy();

        spy();

        assert(spy.called);

        spy(1);
        spy(1);
        spy(2);

        assert.equal(spy.callCount, 4);
    });
});