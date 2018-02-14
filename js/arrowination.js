// !(function (w, d) {

    'use strict';

    var titles = document.querySelectorAll('.title'),

        i = 0,
        len = titles.length;

    for (; i < len; i++) {


        console.log(titles[i]);
        titles[i].onclick = function (e) {

            for (var j = 0; j < len; j++) {
                console.log("title[j]:\t" + titles[j]);
                console.log("this:\t" + this);
                if (this != titles[j]) {
                    titles[j].parentNode.className = titles[j].parentNode.className.replace(/ open/i, '');
                    console.log("title[j]classname:\t" + titles[j].parentNode.className);
                }
            }

            var cn = this.parentNode.className;
            console.log("cn:\t" + cn.search(/open/i));
            console.log("~cn:\t" + ~cn.search(/open/i));
            console.log("replacecn:\t" + cn.replace(/ open/i, ''));
            /* js中，0就是false 非0就是true;
             *<br/>
             *通过三元运算符来，当类名中有open的话，那么就去掉，没有就添加上
             *<br/>
             *search() 方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。
如果没有找到任何匹配的子串，则返回 -1。
             */
            this.parentNode.className = ~cn.search(/open/i) ? cn.replace(/ open/i, '') : cn + ' open';
            console.log("this.classname:\t" + this.parentNode.className);

        };
    }

// })(this, document);