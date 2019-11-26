(function() {
    'use strict'; 

    var 
    /**
     * 跟节点
     * @type {Element}
     */
    el = document.documentElement,
    /**
     * 事件类型，如果不存在旋转事件，则以reisze代替
     * @type {String}
     */
    eventType = 'orientationchange' in window ? 'orientationchange' : 'resize',
    /**
     * font size基准参考值
     * @type {Number}
     */
    size = 100,
    /**
     * 设备独立像素基准参考值，以iPhone 6s 为基准
     * @type {Number}
     */
    dpWidth = 750,
    /**
     * 计算rem基准值
     */
    calc = function()  {
        el.style.fontSize = el.clientWidth / dpWidth * size +'px';
    };

    calc();
    window.addEventListener(eventType, calc, false);
})();