import sinon from 'sinon'
import jsdom from "mocha-jsdom";
import {assert} from 'chai'
import jquery from 'jquery';
import myLib from "./my-lib.js";

describe('sinon fake xhr', function () {

    var $
    jsdom({
        // 没有起这个服务也没有关系
        url: 'http://localhost:8080'
    })


    before(function () {
        jquery(window);
        $ = window.$;

        const xhr = sinon.useFakeXMLHttpRequest();
        const requests = this.requests = [];
        xhr.onCreate = function (xhr) {
            requests.push(xhr);
        };

        // 这句话是关键
        window.XMLHttpRequest = this.xhr = xhr
        // global.window = {
        //     localStorage: {},
        //     console: console
        // };
        // this.xhr = sinon.useFakeXMLHttpRequest();
    });

    after(function () {
        this.xhr.restore();
    });

    it('test should fetch comments from server ', function () {
        var callback = sinon.spy();

        myLib.getCommentsFor("http://localhost:8080/1.json", callback);
        assert.equal(1, this.requests.length);

        this.requests[0].respond(200, { "Content-Type": "application/json" },
            '[{ "id": 12, "comment": "Hey there" }]');
        assert(callback.calledWith([{ id: 12, comment: "Hey there" }]));
    });
});