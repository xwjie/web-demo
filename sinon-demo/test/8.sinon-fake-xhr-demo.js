import sinon from 'sinon'
import jsdom from "mocha-jsdom";
import {assert} from 'chai'
import  jquery from 'jquery';

describe('sinon fake xhr', function () {

    var $
    jsdom({
        // 没有起这个服务也没有关系
        url: 'http://localhost'
    })

    const  myLib ={
        getCommentsFor (url, callback) {
            console.log('get', url)
            $.get(url, callback);
        }
    }

    before(function () {
        jquery(window);
        $ = window.$;
    })

    before(function () {
        this.xhr = sinon.useFakeXMLHttpRequest();
        var requests = this.requests = [];

        this.xhr.onCreate = function (xhr) {
            requests.push(xhr);
        };
    });

    after(function () {
        this.xhr.restore();
    });

    it('test should fetch comments from server ', function () {
        console.log($.get)
        var callback = sinon.spy();

        myLib.getCommentsFor("http://localhost:8080", callback);
        assert.equal(1, this.requests.length);

        this.requests[0].respond(200, { "Content-Type": "application/json" },
            '[{ "id": 12, "comment": "Hey there" }]');
        assert(callback.calledWith([{ id: 12, comment: "Hey there" }]));
    });
});