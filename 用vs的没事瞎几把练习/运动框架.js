// JavaScript source code

//param:
//ele - object  表示要进行的节点(必须)
//attr - srting  表示要改变得css属性（必须）
//target - number 表示属性的终点值(必须)
//step - number 表示运动速度的正数，默认5(选填)
//return : underfined

window.Move = function () {
    window.requestAnimationFrame = window.requestAnimationFrame || function (f) { return };
    window.cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout;
    return function Move(ele, attr, target, step = 5) {
        //获取css的所有样式  返回的为object  兼容浏览器
        var cssObj = ele.currentStyle || getComputedStyle(ele);
        //初始的值
        var sVal = parseFloat(cssObj[attr]);
        //考虑初始值与目标值大小的问题
        var bool = sVal > target;
        if (sVal > target) {
            step = -Math.abs(step);
        } else if (sVal < target) {
            step = Math.abs(step);
        } else {
            return;
        }
        function f() {
            sVal += step;
            //是否到达目标值
            var xBool = bool ? sVal <= target : sVal >= target;
            sVal = xBool ? target : sVal;
            if (attr === "opacity") {
                ele.style.opacity = sVal;
                ele.style.filter = "alpha(opacity=" + sVal * 100 + ")";
            } else if (attr === "zIndex") {
                ele.style.zIndex = sVal;
            } else {
                ele.style[attr] = sVal + "px";
            }
            xBool || requestAnimationFrame(f);
        }
        requestAnimationFrame(f);
    }
}();