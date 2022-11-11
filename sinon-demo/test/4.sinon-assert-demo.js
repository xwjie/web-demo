import sinon from "sinon";

describe("spy all", function () {
    it("传入Once的函数会被调用", function () {
        let spy = sinon.spy();

        spy();

        sinon.assert.called(spy);

        spy(1);
        spy(1);
        spy(2);

        sinon.assert.callCount(spy, 4);
    });

});