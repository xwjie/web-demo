import $ from 'jquery'
import sinon from "sinon";

const sandbox = sinon.createSandbox();

async function doSomething() {
    return await $.get("aa");
}

describe('sinon test all', function () {

    beforeEach(function () {
        sandbox.stub($, "get");
    });

    afterEach(function () {
        sandbox.restore();
    });

    it('should do something with stubs', sinon.test(function () {
        doSomething();

        sinon.assert.calledOnce(stub);
    }));
});