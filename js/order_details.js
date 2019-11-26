$(function() {
    var $orderDetails = $('.order-details');
    var $orderTime = $('.order-time');
    var $orderNumber = $('.order-number');

    changeColor();
    // 颜色控制
    function changeColor() {
        $('#apiShow').find(".api-tr:nth-child(odd)").css("background-color","#f7f7f7"); 
        $('#apiShow').find(".api-tr:nth-child(even)").css("background-color","#fff"); 
    }
})