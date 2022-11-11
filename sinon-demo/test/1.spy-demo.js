import sinon from "sinon";
import {assert} from "chai";

describe("spy all", function () {
    it("基础应用，创建空函数", function () {
        let spy = sinon.spy();

        spy();

        assert(spy.called);

        spy(1);
        spy(1);
        spy(2);

        assert.equal(spy.callCount, 4);

        // 参数为1调用了2次
        assert(spy.withArgs(1).calledTwice)
    });

    it("对原有函数的spy封装，可以监听原有函数的调用情况", function () {
        const obj = {
            func: () => {
                return 1 + 1;
            },
        };

        let spy = sinon.spy(obj, "func");

        try { // 同一个
            assert(spy === obj.func)

            obj.func(3);

            assert(obj.func.calledOnce);
            assert.equal(obj.func.getCall(0).args[0], 3);
        } finally {
            spy.restore();
        }
    });

    describe('经典应用场景：callback', function () {
        it('call被调用，参数校验 ', function () {
            // 模拟一个post方法
            const post = (params, callback) =>{
                console.log('call post method', params);
                callback({
                    code: 0,
                    data: '返回的数据'
                })
            }

            let callback = sinon.spy();

            // 执行函数，测试回调调用情况
            post('a=1', callback);

            // 是否被调用了
            assert(callback.called);

            // 检查调用的参数
            console.log(callback.args[0])
            let arg = callback.getCall(0).firstArg;
            console.log(arg)

            // 回调的返回码为0
            assert.equal(arg.code , 0);

            // 有data字段不为false
            assert(arg.data);
        });
    });
});