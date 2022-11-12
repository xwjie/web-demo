import jsdom from "mocha-jsdom";
import {assert} from 'chai'
import  jquery from 'jquery';

describe('mocha tests', function () {

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

})