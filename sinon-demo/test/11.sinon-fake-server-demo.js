import sinon from 'sinon';
import myLib from './my-lib.js';

describe('sinon fake server all', function () {
    before(function () {
        this.server = sinon.fakeServer.create();
    });

    after(function () {
        this.server.restore();
    });

    it('test should fetch comments from server', function () {
        this.server.respondWith("GET", "/some/article/comments.json", [
            200,
            { "Content-Type": "application/json" },
            '[{ "id": 12, "comment": "Hey there" }]',
        ]);

        var callback = sinon.spy();
        myLib.getCommentsFor("/some/article", callback);
        this.server.respond();

        sinon.assert.calledWith(callback, [{ id: 12, comment: "Hey there" }]);

        assert(server.requests.length > 0);
    });
});