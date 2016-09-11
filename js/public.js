(function (global, factory) {

    "use strict";
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global.plus = factory());

})(typeof window !== "undefined" ? window : this, function (win, noGlobal) {

    var plus = function () {}

    plus.fn = plus.prototype;

    plus._back = plus.fn._back = function () {

        var newhtml = document.createElement('div');
        newhtml.className = 'history-back';
        newhtml.innerHTML = 'back'
        //var html='<div class="history-back">返回</div>'
        document.body.appendChild(newhtml)

        newhtml.addEventListener('click', function () {
            location.href = '/test/index.html'
        })

        if (document.querySelector('.logo')) {


            document.querySelector('.logo').addEventListener('click', function () {
                location.href = '/test/index.html'
            })
        }
    }

    plus._black = plus.fn._black = function () {
        var _this = this
        _this.newhtml = document.createElement('div');
        _this.newhtml.className = 'back-black';

        document.body.appendChild(_this.newhtml)

        _this.close = function () {
            document.body.removeChild(_this.newhtml)
        }
        return _this

    }
    //弹窗（新）
    function _Alert(option) {
        var a = new plus._black()
        var _this = this
        var opts = {
            cf: 0,
            title: '提示',
            content: '',
            submit_text: '确定',
            cancel_text: '取消',
            submit: function (e) {
            },
            cancel: function (e) {
            }
        }

        _this.createHTML = function (tags, cn, html, to) {
            var newhtml = document.createElement(tags)
            newhtml.className = cn
            newhtml.innerHTML = html
            to.appendChild(newhtml)
            return newhtml
        }

        var opt = $.extend(opts, option)
        _this.htmls = document.createElement('div')
        _this.htmls.className = 'yalert-box'


        _this.createHTML('div', 'yalert-box-top', opt.title, _this.htmls)

        _this.createHTML('div', 'yalert-box-tip', opt.content, _this.htmls)


        var btn = document.createElement('div')
        btn.className = 'yalert-box-btn'
        var y_quxiao = '', y_queding = ''
        if (opts.cf) {
            y_quxiao = _this.createHTML('a', 'yalert-box-submit', opt.cancel_text, btn)
            y_queding = _this.createHTML('a', 'yalert-box-submit', opt.submit_text, btn)

        } else {
            y_queding = _this.createHTML('a', 'yalert-box-submit', opt.submit_text, btn)
            y_queding.style.width = '100%'
        }

        _this.htmls.appendChild(btn)

        if (document.getElementsByTagName('input').length) {
            for (var i = 0; i < document.getElementsByTagName('input').length; i++) {
                document.getElementsByTagName('input')[i].blur()

            }
        }

        if (document.getElementsByTagName('textarea').length) {
            for (var i = 0; i < document.getElementsByTagName('textarea').length; i++) {
                document.getElementsByTagName('textarea')[i].blur()

            }
        }

        document.body.appendChild(_this.htmls)

        y_queding.addEventListener('click', function () {

            if (option.submit) {
                opt.submit(_this)
            } else {
                document.body.removeChild(_this.htmls)

                a.close()
            }
        })

        if (opts.cf) {
            y_quxiao.addEventListener('click', function () {
                if (option.cancel) {
                    opt.cancel(_this)
                } else {
                    document.body.removeChild(_this.htmls)
                    a.close()
                }

            })
        }


        _this.close = function () {
            document.body.removeChild(_this.htmls)
            a.close()

        };

    }

    //弹窗调用
    plus._alert = plus.fn._alert = function (option) {
        new _Alert(option)
    }


    //获取URL上参数
    plus._getUrlParam = plus.fn._getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null
    }
    if (!noGlobal) {
        window._plus = plus;
    }


    return plus;
})






