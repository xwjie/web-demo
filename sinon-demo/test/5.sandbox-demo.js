import {createSandbox} from "sinon";

var sandbox = createSandbox();
var myAPI = { hello: function () {} };

describe("myAPI.hello method", function () {
    beforeEach(function () {
        // stub out the `hello` method
        sandbox.stub(myAPI, "hello");
    });

    afterEach(function () {
        // completely restore all fakes created through the sandbox
        sandbox.restore();
    });

    it("should be called once", function () {
        myAPI.hello();
        sandbox.assert.calledOnce(myAPI.hello);
    });

    it("should be called twice", function () {
        myAPI.hello();
        myAPI.hello();
        sandbox.assert.calledTwice(myAPI.hello);
    });
});
