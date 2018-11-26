// JavaScript source code

//param:
//ele - object  ��ʾҪ���еĽڵ�(����)
//attr - srting  ��ʾҪ�ı��css���ԣ����룩
//target - number ��ʾ���Ե��յ�ֵ(����)
//step - number ��ʾ�˶��ٶȵ�������Ĭ��5(ѡ��)
//return : underfined

window.Move = function () {
    window.requestAnimationFrame = window.requestAnimationFrame || function (f) { return };
    window.cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout;
    return function Move(ele, attr, target, step = 5) {
        //��ȡcss��������ʽ  ���ص�Ϊobject  ���������
        var cssObj = ele.currentStyle || getComputedStyle(ele);
        //��ʼ��ֵ
        var sVal = parseFloat(cssObj[attr]);
        //���ǳ�ʼֵ��Ŀ��ֵ��С������
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
            //�Ƿ񵽴�Ŀ��ֵ
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