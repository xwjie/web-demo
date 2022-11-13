import jsdom from "mocha-jsdom";
import sinon from 'sinon'
import {assert} from 'chai'
import jquery from 'jquery';

describe('mocha-jsdom and jquery tests', function () {

    var $
    jsdom({
        // 没有起这个服务也没有关系
        url: 'http://localhost'
    })

    before(function () {
        jquery(window);
        $ = window.$;
    })

    it('works', function () {
        document.body.innerHTML = '<div>xwjie</div>'
        assert.equal($("div").html(), 'xwjie')
    })

    it('ajax test', function () {
        let url = "http://localhost:8080/1.json";
        console.log('get:', url);

        $.get(url, (data) => {
            console.log('result:', data);
        });

        $.ajax({
            url,
            success: function (data) {
                console.log('result2:', data);
            }
        });

        // var callback = sinon.spy();
        //
        // sinon.assert.called(callback);
        //
        // assert(callback.calledWith([{ id: 12, comment: "Hey there" }]));
    }).timeout(3000);

})